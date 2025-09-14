"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex items-center justify-center rounded-full bg-orange-100 p-4">
              <FileSearch className="h-10 w-10 text-orange-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Get Started with Dissafyt</h1>
              <p className="text-sm text-muted-foreground mt-2">Access our software solutions and services</p>
            </div>
          </div>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Choose an Option</CardTitle>
              <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Link href="/auth/signin">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Sign In to Your Account</Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="outline" className="w-full">
                  Create a New Account
                </Button>
              </Link>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground text-center">
                By continuing, you agree to our{" "}
                <Link href="/terms-of-service" className="text-orange-500 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-orange-500 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
