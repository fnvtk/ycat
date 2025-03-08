"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/hooks/use-cart"

interface DemandItem {
  id: string
  title: string
  price: number
  deadline: string
  location: string
  type: "公司注册变更" | "知识产权" | "其他"
}

interface DemandListProps {
  role: "enterprise" | "accountant"
}

export function DemandList({ role }: DemandListProps) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [demands] = useState<DemandItem[]>([
    {
      id: "1",
      title: "增资并释放股权，同时变更地址",
      price: 500,
      deadline: "02-10",
      location: "福建省-厦门市",
      type: "公司注册变更",
    },
    {
      id: "2",
      title: "要变更公司法人",
      price: 300,
      deadline: "02-10",
      location: "福建省-厦门市",
      type: "公司注册变更",
    },
    {
      id: "3",
      title: "需要申请一个软件著作权，还能加急吗？",
      price: 800,
      deadline: "05-10",
      location: "福建省-厦门市",
      type: "知识产权",
    },
  ])

  // Update the handleAction function to include the payment calculation and AI assistant notification for accountants
  const handleAction = async (demand: DemandItem) => {
    if (role === "enterprise") {
      addToCart()
      toast({
        title: "已加入购物车",
        description: `${demand.title} 已成功加入购物车`,
      })
    } else {
      // Calculate payment amount (10% of demand price, minimum 50 yuan)
      const paymentAmount = Math.max(demand.price * 0.1, 50)

      // Show confirmation dialog
      if (confirm(`确认接单？将收取¥${paymentAmount}服务费（订单金额的10%，最低50元），订单将添加至AI助理手机。`)) {
        toast({
          title: "接单成功",
          description: `您已成功接下 "${demand.title}" 的订单，请查看AI助理手机获取详情。`,
        })
        // 这里可以添加接单逻辑，比如发送请求到服务器
      }
    }
  }

  return (
    <div className="space-y-4">
      {demands.map((demand) => (
        <div key={demand.id} className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium mb-1">{demand.title}</h3>
              <div className="text-sm text-gray-500">截止日期：{demand.deadline}</div>
            </div>
            <div className="text-[#00b578] font-medium">{demand.price.toLocaleString()}元</div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-gray-500">{demand.location}</span>
            <Button onClick={() => handleAction(demand)} className="bg-[#00b578] hover:bg-[#00a066]">
              {role === "enterprise" ? "加入购物车" : "我要接单"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

// 由存客宝技术团队开发

