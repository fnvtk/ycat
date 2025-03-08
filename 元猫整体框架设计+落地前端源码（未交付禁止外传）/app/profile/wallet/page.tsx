"use client"

import { IOSHeader } from "@/components/ios-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, ArrowUpRight, Clock } from "lucide-react"

export default function WalletPage() {
  const transactions = [
    { id: 1, type: "收入", amount: 3800, date: "2024-02-06", desc: "财务服务收入" },
    { id: 2, type: "支出", amount: -1200, date: "2024-02-05", desc: "提现" },
    { id: 3, type: "收入", amount: 2500, date: "2024-02-04", desc: "法务咨询收入" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="我的钱包" />

      <div className="p-4 bg-[#00b578] text-white">
        <h2 className="text-sm opacity-80">账户余额</h2>
        <div className="text-3xl font-bold mt-2">¥12,345.67</div>
        <div className="flex gap-4 mt-4">
          <Button variant="outline" className="flex-1 bg-white/20 border-white text-white hover:bg-white/30">
            充值
          </Button>
          <Button variant="outline" className="flex-1 bg-white/20 border-white text-white hover:bg-white/30">
            提现
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-white">
        <Card className="p-4 text-center">
          <Wallet className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">¥8,500</div>
          <div className="text-xs text-gray-500">本月收入</div>
        </Card>
        <Card className="p-4 text-center">
          <ArrowUpRight className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">¥2,300</div>
          <div className="text-xs text-gray-500">待结算</div>
        </Card>
        <Card className="p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">3</div>
          <div className="text-xs text-gray-500">待处理订单</div>
        </Card>
      </div>

      <div className="mt-4 bg-white p-4">
        <h2 className="font-bold mb-4">交易记录</h2>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-0">
            <div>
              <div className="font-medium">{transaction.desc}</div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
            <div className={transaction.type === "收入" ? "text-[#00b578]" : "text-gray-600"}>
              {transaction.type === "收入" ? "+" : ""}
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

