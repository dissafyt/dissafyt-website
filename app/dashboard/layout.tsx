"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}
