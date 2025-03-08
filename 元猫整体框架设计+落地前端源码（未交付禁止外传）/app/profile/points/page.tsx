"use client"

import { IOSHeader } from "@/components/ios-header"
import { Card } from "@/components/ui/card"
import { Gift, Award, Clock } from "lucide-react"

export default function PointsPage() {
  const pointsHistory = [
    { id: 1, type: "获得", points: 100, date: "2024-02-06", desc: "完成订单" },
    { id: 2, type: "使用", points: -50, date: "2024-02-05", desc: "兑换优惠券" },
    { id: 3, type: "获得", points: 200, date: "2024-02-04", desc: "邀请新用户" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="我的积分" />

      <div className="p-4 bg-[#00b578] text-white">
        <h2 className="text-sm opacity-80">当前积分</h2>
        <div className="text-3xl font-bold mt-2">3,500</div>
        <div className="text-sm opacity-80 mt-2">距离下一等级还需1,500积分</div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-white">
        <Card className="p-4 text-center">
          <Gift className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">850</div>
          <div className="text-xs text-gray-500">本月获得</div>
        </Card>
        <Card className="p-4 text-center">
          <Award className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">银牌</div>
          <div className="text-xs text-gray-500">当前等级</div>
        </Card>
        <Card className="p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">180</div>
          <div className="text-xs text-gray-500">即将过期</div>
        </Card>
      </div>

      <div className="mt-4 bg-white p-4">
        <h2 className="font-bold mb-4">积分记录</h2>
        {pointsHistory.map((record) => (
          <div key={record.id} className="flex items-center justify-between py-3 border-b last:border-0">
            <div>
              <div className="font-medium">{record.desc}</div>
              <div className="text-sm text-gray-500">{record.date}</div>
            </div>
            <div className={record.type === "获得" ? "text-[#00b578]" : "text-gray-600"}>
              {record.type === "获得" ? "+" : ""}
              {record.points}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

