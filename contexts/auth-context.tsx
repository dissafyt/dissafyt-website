"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  type UserCredential,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { createSession, clearSession, validateSession } from "@/lib/session-service"
import { createUserProfile, getUserProfile, updateUserProfile, type UserProfile } from "@/lib/user-service"

interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string, userData?: Partial<UserProfile>) => Promise<UserCredential>
  signInWithGoogle: () => Promise<UserCredential>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateProfile: (data: Partial<UserProfile>) => Promise<UserProfile | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch user profile when user changes
  useEffect(() => {
    async function fetchUserProfile() {
      if (user) {
        try {
          const profile = await getUserProfile(user.uid)
          setUserProfile(profile)
        } catch (error) {
          console.error("Error fetching user profile:", error)
        }
      } else {
        setUserProfile(null)
      }
    }

    fetchUserProfile()
  }, [user])

  useEffect(() => {
    // Set up auth state listener
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)

      if (user) {
        // Validate the session
        const sessionCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("session="))
          ?.split("=")[1]

        if (sessionCookie) {
          const isValid = await validateSession(sessionCookie)
          if (!isValid) {
            // If session is invalid, refresh it
            await createSession(user)
          }
        } else {
          // If no session exists, create one
          await createSession(user)
        }
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      await createSession(userCredential.user)
      return userCredential
    } catch (error) {
      console.error("Error signing in:", error)
      throw error
    }
  }

  const signUp = async (email: string, password: string, userData?: Partial<UserProfile>) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Create session
      await createSession(userCredential.user)

      // Create user profile in Firestore
      if (userCredential.user) {
        await createUserProfile({
          uid: userCredential.user.uid,
          email: userCredential.user.email || email,
          ...userData,
        })
      }

      return userCredential
    } catch (error) {
      console.error("Error signing up:", error)
      throw error
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)

      // Create session
      await createSession(userCredential.user)

      // Check if user profile exists, if not create one
      if (userCredential.user) {
        const profile = await getUserProfile(userCredential.user.uid)

        if (!profile) {
          await createUserProfile({
            uid: userCredential.user.uid,
            email: userCredential.user.email || "",
            firstName: userCredential.user.displayName?.split(" ")[0] || "",
            lastName: userCredential.user.displayName?.split(" ").slice(1).join(" ") || "",
          })
        }
      }

      return userCredential
    } catch (error) {
      console.error("Error signing in with Google:", error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      clearSession()
    } catch (error) {
      console.error("Error signing out:", error)
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      console.error("Error resetting password:", error)
      throw error
    }
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return null

    try {
      const updatedProfile = await updateUserProfile(user.uid, data)
      setUserProfile(updatedProfile)
      return updatedProfile
    } catch (error) {
      console.error("Error updating profile:", error)
      throw error
    }
  }

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    resetPassword,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
