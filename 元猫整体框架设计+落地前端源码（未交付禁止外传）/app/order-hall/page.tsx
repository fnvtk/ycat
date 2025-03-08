"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Order {
  id: string
  title: string
  description: string
  price: number
  deadline: string
}

export default function OrderHall() {
  const { toast } = useToast()
  const [orders] = useState<Order[]>([
    {
      id: "1",
      title: "月度财务报表制作",
      description: "需要制作一份详细的月度财务报表，包括损益表、资产负债表和现金流量表。",
      price: 2000,
      deadline: "2024-03-15",
    },
    {
      id: "2",
      title: "税务筹划方案",
      description: "为一家中型制造企业提供税务筹划方案，优化税负结构。",
      price: 5000,
      deadline: "2024-03-20",
    },
    {
      id: "3",
      title: "年度审计准备",
      description: "协助准备年度审计所需的所有财务文件和报表。",
      price: 8000,
      deadline: "2024-04-30",
    },
  ])

  // Update the handleAcceptOrder function to include the payment calculation and AI assistant notification
  const handleAcceptOrder = (order: Order) => {
    // Calculate payment amount (10% of order price, minimum 50 yuan)
    const paymentAmount = Math.max(order.price * 0.1, 50)

    toast({
      title: "接单确认",
      description: `接单将收取¥${paymentAmount}服务费（订单金额的10%，最低50元），订单将添加至AI助理手机并推送通知。`,
    })

    // Show confirmation dialog
    if (confirm(`确认接单？将收取¥${paymentAmount}服务费，订单将添加至AI助理手机。`)) {
      toast({
        title: "接单成功",
        description: `您已成功接下"${order.title}"的订单，请查看AI助理手机获取详情。`,
      })
      // 这里可以添加接单逻辑，比如发送请求到服务器
    }
  }

  return (
    <main className="pb-20">
      <IOSHeader title="接单大厅" />

      <div className="p-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg p-4 mb-4 shadow">
            <h3 className="font-bold text-lg mb-2">{order.title}</h3>
            <p className="text-gray-600 mb-2">{order.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#00b578] font-bold">{order.price}元</span>
              <span className="text-gray-500">截止日期: {order.deadline}</span>
            </div>
            <Button onClick={() => handleAcceptOrder(order)} className="w-full bg-[#00b578] hover:bg-[#00a066]">
              我要接单
            </Button>
          </div>
        ))}
      </div>

      <BottomNav />
    </main>
  )
}

