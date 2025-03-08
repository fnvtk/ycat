"use client"

import { Home, Trophy, BarChart2, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-[390px] mx-auto flex justify-around py-2">
        <Link
          href="/"
          className={`flex flex-col items-center p-2 ${pathname === "/" ? "text-[#00b578]" : "text-gray-600"}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs">首页</span>
        </Link>
        <Link
          href="/rankings"
          className={`flex flex-col items-center p-2 ${pathname === "/rankings" ? "text-[#00b578]" : "text-gray-600"}`}
        >
          <Trophy className="h-6 w-6" />
          <span className="text-xs">排行榜</span>
        </Link>
        <Link
          href="/market"
          className={`flex flex-col items-center p-2 ${pathname === "/market" ? "text-[#00b578]" : "text-gray-600"}`}
        >
          <BarChart2 className="h-6 w-6" />
          <span className="text-xs">供需集市</span>
        </Link>
        <Link
          href="/profile"
          className={`flex flex-col items-center p-2 ${pathname === "/profile" ? "text-[#00b578]" : "text-gray-600"}`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs">我的</span>
        </Link>
      </div>
    </div>
  )
}

// 由存客宝技术团队开发

