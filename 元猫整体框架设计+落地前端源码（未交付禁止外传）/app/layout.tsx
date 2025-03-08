import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GlobalCart } from "@/components/global-cart"
import { PoweredBy } from "@/components/powered-by"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "元猫财务服务平台",
  description: "元猫 - 您的一站式财务服务解决方案",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        <div className="flex-grow max-w-[390px] mx-auto w-full relative">{children}</div>
        <PoweredBy />
        <GlobalCart />
      </body>
    </html>
  )
}

// 由存客宝技术团队开发



import './globals.css'