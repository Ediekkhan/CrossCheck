import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "CrossCheck - Never Lose a Listing Again",
  description:
    "Prevent eCommerce listing suspensions with real-time policy monitoring. Works on Amazon, Shopify, and WooCommerce.",
  keywords: [
    "Amazon seller tools",
    "Shopify monitoring",
    "WooCommerce compliance",
    "eCommerce policy checker",
    "listing suspension prevention",
  ],
  authors: [{ name: "CrossCheck" }],
  openGraph: {
    title: "CrossCheck - Never Lose a Listing Again",
    description:
      "Prevent eCommerce listing suspensions with real-time policy monitoring.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-50`}>
        {children}
      </body>
    </html>
  )
}
