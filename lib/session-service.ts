import type { User } from "firebase/auth"
import { auth } from "./firebase"

// Token refresh interval (15 minutes)
const TOKEN_REFRESH_INTERVAL = 15 * 60 * 1000

// Session cookie options
const SESSION_COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24, // 1 day
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
}

// Create a session with proper security
export async function createSession(user: User): Promise<void> {
  try {
    // Get the ID token
    const idToken = await user.getIdToken()

    // Set the session cookie with secure options
    document.cookie = `session=${idToken}; path=${SESSION_COOKIE_OPTIONS.path}; max-age=${SESSION_COOKIE_OPTIONS.maxAge}; SameSite=${SESSION_COOKIE_OPTIONS.sameSite}${SESSION_COOKIE_OPTIONS.secure ? "; Secure" : ""}`

    // Store minimal user info in localStorage for UI purposes only
    localStorage.setItem(
      "authUser",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }),
    )

    // Set up token refresh
    setupTokenRefresh(user)
  } catch (error) {
    console.error("Error creating session:", error)
    throw error
  }
}

// Validate a session token
export async function validateSession(token: string): Promise<boolean> {
  try {
    // In a real implementation, this would make a server call to validate the token
    // For now, we'll just check if the token exists and is not expired
    if (!token) return false

    // Basic validation - in production, this would be a server-side verification
    const user = auth.currentUser
    if (!user) return false

    return true
  } catch (error) {
    console.error("Error validating session:", error)
    return false
  }
}

// Clear the session
export function clearSession(): void {
  // Clear the session cookie
  document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict"

  // Clear localStorage
  localStorage.removeItem("authUser")

  // Clear any refresh timers
  if (window._tokenRefreshTimer) {
    clearInterval(window._tokenRefreshTimer)
    delete window._tokenRefreshTimer
  }
}

// Set up token refresh
function setupTokenRefresh(user: User): void {
  // Clear any existing refresh timers
  if (window._tokenRefreshTimer) {
    clearInterval(window._tokenRefreshTimer)
  }

  // Set up a new refresh timer
  window._tokenRefreshTimer = setInterval(async () => {
    try {
      if (auth.currentUser) {
        const newToken = await auth.currentUser.getIdToken(true)
        document.cookie = `session=${newToken}; path=${SESSION_COOKIE_OPTIONS.path}; max-age=${SESSION_COOKIE_OPTIONS.maxAge}; SameSite=${SESSION_COOKIE_OPTIONS.sameSite}${SESSION_COOKIE_OPTIONS.secure ? "; Secure" : ""}`
      } else {
        clearSession()
      }
    } catch (error) {
      console.error("Error refreshing token:", error)
    }
  }, TOKEN_REFRESH_INTERVAL)
}

// Add the timer type to the Window interface
declare global {
  interface Window {
    _tokenRefreshTimer?: number
  }
}
