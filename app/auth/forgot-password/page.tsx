"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await resetPassword(email)
      setIsSubmitted(true)
    } catch (error: any) {
      console.error("Password reset request failed:", error)
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.")
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.")
      } else {
        setError("Failed to send reset email. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Forgot Password</h1>
            <p className="text-sm text-muted-foreground">Enter your email to reset your password</p>
          </div>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Reset Password</CardTitle>
              <CardDescription>We'll send you a link to reset your password</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Check your email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We've sent a password reset link to <span className="font-medium">{email}</span>
                    </p>
                  </div>
                  <Button className="mt-4 w-full" onClick={() => setIsSubmitted(false)} variant="outline">
                    Back to Reset
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              )}
              <div className="mt-4 text-center text-sm">
                Remember your password?{" "}
                <Link href="/auth/signin" className="text-orange-500 hover:text-orange-600 font-medium">
                  Sign in
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-1">
                  <AlertCircle className="h-3 w-3" />
                  <span>Make sure to check your spam folder if you don't see the email.</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
