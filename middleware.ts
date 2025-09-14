import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/auth/signin" ||
    path === "/auth/signup" ||
    path === "/auth/forgot-password" ||
    path === "/auth/get-started"

  // Check if the path is for the dashboard
  const isDashboardPath = path.startsWith("/dashboard")

  // Get the session cookie
  const sessionCookie = request.cookies.get("session")?.value

  // If the user is on a dashboard path and doesn't have a session, redirect to sign in
  if (isDashboardPath && !sessionCookie) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }

  // If the user is on a public path and has a session, redirect to dashboard
  if (isPublicPath && sessionCookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
}
