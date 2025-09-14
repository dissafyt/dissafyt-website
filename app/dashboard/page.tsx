"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, LogOut, ShoppingCart, CheckCircle, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getUserLicenses } from "@/lib/license-service"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [hasLicense, setHasLicense] = useState(false)
  const [licenses, setLicenses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/auth/signin")
      return
    }

    const fetchUserLicenses = async () => {
      try {
        setIsLoading(true)
        const userLicenses = await getUserLicenses(user.uid)
        setLicenses(userLicenses)
        setHasLicense(userLicenses.length > 0)
      } catch (error) {
        console.error("Error fetching user licenses:", error)
        setLicenses([])
        setHasLicense(false)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserLicenses()
  }, [user, router])

  // If still loading or no user, don't render the dashboard
  if (!user) {
    return null
  }

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <FileSearch className="h-6 w-6 text-orange-500" />
          <span>Dissafyt Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <span className="text-sm font-medium">{user.email ? user.email.charAt(0).toUpperCase() : "U"}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome, {user.displayName || user.email?.split("@")[0] || "User"}
            </h1>
            <p className="text-muted-foreground">
              {user.email ? `Logged in as ${user.email}` : "Welcome to your dashboard"}
            </p>
          </div>

          {/* License Status */}
          <Card>
            <CardHeader>
              <CardTitle>License Status</CardTitle>
              <CardDescription>Your current software license information</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
                  <span className="ml-2">Loading licenses...</span>
                </div>
              ) : licenses.length > 0 ? (
                <div className="space-y-4">
                  {licenses.map((license) => (
                    <Alert key={license.id} className="bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <span className="font-semibold">Active License:</span> {license.name}
                        <div className="mt-1 text-sm">Valid until: {license.expiryDate}</div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              ) : (
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800">
                    <span className="font-semibold">No Active License</span>
                    <div className="mt-1 text-sm">Purchase a license to access our software products</div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            {!hasLicense && (
              <CardFooter>
                <Link href="/software" className="w-full">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Purchase License
                  </Button>
                </Link>
              </CardFooter>
            )}
          </Card>

          {/* Software Access */}
          <Card>
            <CardHeader>
              <CardTitle>Your Software</CardTitle>
              <CardDescription>Access your Dissafyt software products</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {hasLicense ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">OCR Waybill Scanner</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Process waybills and shipping documents with our advanced OCR technology.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/software/ocr-waybill-scanner/app" className="w-full">
                        <Button className="w-full">Launch Application</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        View insights and analytics for your processed documents.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/software/analytics" className="w-full">
                        <Button className="w-full">View Analytics</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Software Access</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
                    Purchase a license to gain access to our software products and start optimizing your business
                    operations.
                  </p>
                  <Link href="/software">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Software Options</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Access support resources</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <Link href="/documentation" className="block">
                <Button variant="outline" className="w-full">
                  Documentation
                </Button>
              </Link>
              <Link href="/faq" className="block">
                <Button variant="outline" className="w-full">
                  FAQ
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
