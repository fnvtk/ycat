"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"

interface ServiceItem {
  id: string
  title: string
  description: string
  normalPrice: number
  memberPrice: number | null
  image?: string
}

interface Category {
  id: string
  name: string
  services: ServiceItem[]
}

export default function Market() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { toast } = useToast()
  const router = useRouter()
  const { addToCart } = useCart()

  const categories: Category[] = [
    {
      id: "all",
      name: "全部",
      services: [],
    },
    {
      id: "finance",
      name: "财税",
      services: [
        {
          id: "1",
          title: "财务法务一体化服务",
          description: "提供财务、税务、法务全栈服务",
          normalPrice: 3800,
          memberPrice: 3000,
        },
        {
          id: "2",
          title: "代理记账服务",
          description: "专业代理记账，包含税务申报",
          normalPrice: 1200,
          memberPrice: 980,
        },
        {
          id: "3",
          title: "税务筹划方案",
          description: "个性化税务筹划建议",
          normalPrice: 5000,
          memberPrice: 4500,
        },
        {
          id: "4",
          title: "财务顾问服务",
          description: "专业财务分析和建议",
          normalPrice: 2800,
          memberPrice: 2400,
        },
      ],
    },
    {
      id: "legal",
      name: "法务",
      services: [
        {
          id: "5",
          title: "合同审查服务",
          description: "专业合同审查和修改建议",
          normalPrice: 2000,
          memberPrice: 1800,
        },
        {
          id: "6",
          title: "法律咨询包年",
          description: "提供全年法律咨询服务",
          normalPrice: 12000,
          memberPrice: 9800,
        },
        {
          id: "7",
          title: "知识产权保护",
          description: "商标注册、专利申请等",
          normalPrice: 3500,
          memberPrice: 3000,
        },
      ],
    },
    {
      id: "consult",
      name: "咨询",
      services: [
        {
          id: "8",
          title: "创业咨询服务",
          description: "创业全程指导和建议",
          normalPrice: 4000,
          memberPrice: 3500,
        },
        {
          id: "9",
          title: "融资方案咨询",
          description: "企业融资方案定制",
          normalPrice: 6000,
          memberPrice: 5000,
        },
        {
          id: "10",
          title: "商业计划书撰写",
          description: "专业商业计划书制作",
          normalPrice: 8000,
          memberPrice: 7000,
        },
      ],
    },
    {
      id: "company",
      name: "工商",
      services: [
        {
          id: "11",
          title: "公司注册套餐",
          description: "一站式公司注册服务",
          normalPrice: 1500,
          memberPrice: 1200,
        },
        {
          id: "12",
          title: "工商变更服务",
          description: "公司信息变更办理",
          normalPrice: 1000,
          memberPrice: 800,
        },
        {
          id: "13",
          title: "公司注销服务",
          description: "一站式公司注销服务",
          normalPrice: 3000,
          memberPrice: 2500,
        },
      ],
    },
  ]

  const handleAddToCart = (service: ServiceItem) => {
    addToCart()
    toast({
      title: "已加入购物车",
      description: `${service.title} 已成功加入购物车`,
    })
  }

  return (
    <main className="flex h-screen">
      {/* 左侧分类菜单 */}
      <div className="w-24 bg-gray-50 overflow-y-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`w-full py-4 text-center ${
              selectedCategory === category.id ? "bg-white text-[#00b578] border-l-4 border-[#00b578]" : "text-gray-600"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 右侧内容区 */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <IOSHeader title="服务商城" />

        <div className="flex-1 overflow-y-auto">
          {categories
            .find((c) => c.id === selectedCategory)
            ?.services.map((service) => (
              <div key={service.id} className="p-4 border-b">
                <Link href={`/market/${service.id}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{service.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00b578] text-lg">¥{service.memberPrice || service.normalPrice}</span>
                    {service.memberPrice && (
                      <span className="text-gray-400 line-through text-sm">¥{service.normalPrice}</span>
                    )}
                    <span className="text-sm text-gray-500">/月</span>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(service)}
                  className="mt-2 px-4 py-2 bg-[#00b578] text-white rounded-full"
                >
                  加入购物车
                </button>
              </div>
            ))}
        </div>

        <BottomNav />
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

