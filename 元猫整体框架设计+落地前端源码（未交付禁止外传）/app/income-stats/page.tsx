"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function IncomeStats() {
  const [incomeData] = useState([
    { month: "1月", income: 15000 },
    { month: "2月", income: 18000 },
    { month: "3月", income: 22000 },
    { month: "4月", income: 20000 },
    { month: "5月", income: 25000 },
    { month: "6月", income: 30000 },
  ])

  const totalIncome = incomeData.reduce((sum, data) => sum + data.income, 0)
  const averageIncome = totalIncome / incomeData.length

  return (
    <main className="pb-20">
      <IOSHeader title="收入统计" />

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-2">总收入</h3>
            <p className="text-2xl text-[#00b578]">{totalIncome.toLocaleString()}元</p>
          </Card>
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-2">月均收入</h3>
            <p className="text-2xl text-[#00b578]">{averageIncome.toFixed(2).toLocaleString()}元</p>
          </Card>
        </div>

        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">收入趋势</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#00b578" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <BottomNav />
    </main>
  )
}

