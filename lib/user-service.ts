import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export interface UserProfile {
  uid: string
  email: string
  firstName?: string
  lastName?: string
  company?: string
  createdAt: Date
  updatedAt: Date
}

// Create a new user profile in Firestore
export async function createUserProfile(userData: Partial<UserProfile>): Promise<UserProfile> {
  if (!userData.uid) {
    throw new Error("User ID is required")
  }

  const userRef = doc(db, "users", userData.uid)

  // Check if user already exists
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    throw new Error("User already exists")
  }

  const timestamp = new Date()

  const newUser: UserProfile = {
    uid: userData.uid,
    email: userData.email || "",
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    company: userData.company || "",
    createdAt: timestamp,
    updatedAt: timestamp,
  }

  await setDoc(userRef, newUser)
  return newUser
}

// Get a user profile from Firestore
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(db, "users", uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    return null
  }

  return userSnap.data() as UserProfile
}

// Update a user profile in Firestore
export async function updateUserProfile(uid: string, userData: Partial<UserProfile>): Promise<UserProfile> {
  const userRef = doc(db, "users", uid)

  // Check if user exists
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    throw new Error("User does not exist")
  }

  const updatedData = {
    ...userData,
    updatedAt: new Date(),
  }

  await updateDoc(userRef, updatedData)

  // Get the updated user profile
  const updatedUserSnap = await getDoc(userRef)
  return updatedUserSnap.data() as UserProfile
}
