"use client"

import { Users, FileText, Wallet, Clock, UserPlus, FileSignature, Calculator, Trophy } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface QuickActionsProps {
  role: "enterprise" | "accountant"
}

export function QuickActions({ role }: QuickActionsProps) {
  const router = useRouter()

  const actions =
    role === "enterprise"
      ? [
          {
            icon: Users,
            label: "注册会计",
            link: "/rankings",
            color: "bg-[#e6fff5]",
            iconColor: "text-[#00b578]",
          },
          {
            icon: FileText,
            label: "需求登记",
            link: "/post-demand",
            color: "bg-[#fff7e6]",
            iconColor: "text-[#ffa940]",
          },
          {
            icon: Wallet,
            label: "我要付款",
            link: "/payment",
            color: "bg-[#f9f0ff]",
            iconColor: "text-[#722ed1]",
          },
          {
            icon: Clock,
            label: "待处理单",
            link: "/pending",
            color: "bg-[#fff1f0]",
            iconColor: "text-[#f5222d]",
          },
        ]
      : [
          {
            icon: UserPlus,
            label: "接单大厅",
            link: "/order-hall",
            color: "bg-[#e6fff5]",
            iconColor: "text-[#00b578]",
          },
          {
            icon: FileSignature,
            label: "我的接单",
            link: "/my-orders",
            color: "bg-[#fff7e6]",
            iconColor: "text-[#ffa940]",
          },
          {
            icon: Calculator,
            label: "收入统计",
            link: "/income-stats",
            color: "bg-[#f9f0ff]",
            iconColor: "text-[#722ed1]",
          },
          {
            icon: Trophy,
            label: "排行榜",
            link: "/rankings",
            color: "bg-[#fff1f0]",
            iconColor: "text-[#f5222d]",
          },
        ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <Link
          key={index}
          href={action.link}
          className={`flex flex-col items-center justify-center ${action.color} rounded-xl p-6`}
        >
          <action.icon className={`w-8 h-8 ${action.iconColor} mb-2`} />
          <span className="text-gray-800">{action.label}</span>
        </Link>
      ))}
    </div>
  )
}

// 由存客宝技术团队开发

