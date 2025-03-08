"use client"

import { ChevronLeft, MoreHorizontal, MinusCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface IOSHeaderProps {
  title: string
  showMenu?: boolean
  showMinimize?: boolean
}

export function IOSHeader({ title, showMenu = true, showMinimize = true }: IOSHeaderProps) {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-[#00b578] text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button className="p-1" onClick={() => router.back()}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {showMenu && <MoreHorizontal className="h-6 w-6" />}
        {showMinimize && <MinusCircle className="h-6 w-6" />}
      </div>
    </div>
  )
}

// 由存客宝技术团队开发

