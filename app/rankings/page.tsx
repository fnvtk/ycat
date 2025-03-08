"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { Crown, Users } from "lucide-react"

interface RankingData {
  id: number
  name: string
  avatar: string
  monthlyCustomers: number
  income: number
}

const chineseNames = ["张伟", "王芳", "李娜", "刘洋", "陈明", "杨秀英", "黄磊", "周婷", "吴强", "赵丽"]

export default function Rankings() {
  const [rankingData] = useState<RankingData[]>(() => {
    // 生成前4名的数据（收入较高）
    const topFour = Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: chineseNames[i],
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
      monthlyCustomers: Math.floor(Math.random() * 20) + 30, // 30-50个客户
      income: Math.floor(Math.random() * 20000) + 40000, // 4-6万收入
    }))

    // 生成后6名的数据（收入较低）
    const restSix = Array.from({ length: 6 }, (_, i) => ({
      id: i + 5,
      name: chineseNames[i + 4],
      avatar: `https://i.pravatar.cc/150?img=${i + 5}`,
      monthlyCustomers: Math.floor(Math.random() * 15) + 15, // 15-30个客户
      income: Math.floor(Math.random() * 20000) + 10000, // 1-3万收入
    }))

    return [...topFour, ...restSix].sort((a, b) => b.income - a.income)
  })

  return (
    <main className="pb-20">
      <IOSHeader title="收益排行榜" />

      {/* 前三名特别展示 */}
      <div className="flex justify-around p-4 bg-gradient-to-b from-[#00b578] to-white">
        {rankingData.slice(0, 3).map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={item.avatar || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <Crown
                className={`absolute -top-2 -right-2 w-6 h-6 ${
                  index === 0 ? "text-yellow-400" : index === 1 ? "text-gray-400" : "text-orange-400"
                }`}
              />
            </div>
            <span className="mt-2 text-sm font-medium">{item.name}</span>
            <span className="text-xs text-gray-500">{item.income.toLocaleString()}元/月</span>
            <div className="mt-2 text-xs text-[#00b578]">采购{item.monthlyCustomers}位精准客户</div>
          </div>
        ))}
      </div>

      {/* 排行榜列表 */}
      <div className="px-4">
        {rankingData.slice(3).map((item, index) => (
          <div key={item.id} className="flex items-center p-4 bg-white rounded-lg mb-2">
            <span className="w-6 text-gray-400 font-medium">{index + 4}</span>
            <img src={item.avatar || "/placeholder.svg"} alt={item.name} className="w-12 h-12 rounded-full mx-3" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>采购{item.monthlyCustomers}位精准客户</span>
              </div>
            </div>
            <div className="text-[#00b578] font-medium">{item.income.toLocaleString()}元/月</div>
          </div>
        ))}
      </div>

      <BottomNav />
    </main>
  )
}

// 由存客宝技术团队开发

