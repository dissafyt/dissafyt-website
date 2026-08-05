import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  title: "Dissafyt Cuts — Haircut Subscriptions in South Africa",
  description:
    "Fresh cuts, every month. Simple haircut subscription plans from R100/month, including father-and-son combo cuts. Look sharp without the hassle.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0f0d0b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${oswald.variable}`}>
      <body className="bg-background font-sans">{children}</body>
    </html>
  )
}
