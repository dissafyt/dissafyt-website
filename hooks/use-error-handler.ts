"use client"

import { useState, useCallback } from "react"

interface ErrorState {
  message: string
  code?: string
  details?: any
}

export function useErrorHandler() {
  const [error, setError] = useState<ErrorState | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Clear the error
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Handle Firebase auth errors
  const handleAuthError = useCallback((error: any) => {
    let message = "An unexpected error occurred. Please try again."
    const code = error.code || "unknown"

    // Handle common Firebase auth errors
    switch (error.code) {
      case "auth/email-already-in-use":
        message = "An account with this email already exists. Please sign in instead."
        break
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        message = "Invalid email or password. Please try again."
        break
      case "auth/weak-password":
        message = "Password is too weak. Please use a stronger password."
        break
      case "auth/too-many-requests":
        message = "Too many failed login attempts. Please try again later or reset your password."
        break
      case "auth/network-request-failed":
        message = "Network error. Please check your internet connection and try again."
        break
      case "auth/popup-closed-by-user":
        message = "Sign in was cancelled. Please try again."
        break
      case "auth/invalid-email":
        message = "Invalid email address. Please check and try again."
        break
      case "auth/user-disabled":
        message = "This account has been disabled. Please contact support."
        break
      default:
        // Log unexpected errors for debugging
        console.error("Unhandled auth error:", error)
    }

    setError({ message, code, details: error })
    return { message, code }
  }, [])

  // Handle API errors
  const handleApiError = useCallback((error: any) => {
    let message = "An unexpected error occurred. Please try again."
    let code = error.code || "api_error"

    // Handle different types of API errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      message = error.response.data?.message || `Error: ${error.response.status}`
      code = `api_${error.response.status}`
    } else if (error.request) {
      // The request was made but no response was received
      message = "No response from server. Please check your internet connection."
      code = "api_no_response"
    }

    setError({ message, code, details: error })
    return { message, code }
  }, [])

  // Wrap an async function with error handling and loading state
  const withErrorHandling = useCallback(
    async <T,>(
      fn: () => Promise<T>,
      options: {
        onSuccess?: (result: T) => void
        errorHandler?: (error: any) => { message: string; code: string }
      } = {},
    ): Promise<T | null> => {
      try {
        setIsLoading(true)
        clearError()

        const result = await fn()

        options.onSuccess?.(result)
        return result
      } catch (error: any) {
        const handler = options.errorHandler || handleApiError
        handler(error)
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [clearError, handleApiError],
  )

  return {
    error,
    isLoading,
    clearError,
    handleAuthError,
    handleApiError,
    withErrorHandling,
  }
}
