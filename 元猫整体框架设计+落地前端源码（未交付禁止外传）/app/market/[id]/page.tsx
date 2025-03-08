import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ServiceDetail({ params }: { params: { id: string } }) {
  // 这里应该根据 params.id 从后端获取服务详情
  const service = {
    id: params.id,
    title: "财务法务一体化服务",
    description: "提供财务、税务、法务全栈服务",
    normalPrice: 3800,
    memberPrice: 3000,
    details:
      "我们的财务法务一体化服务为您的企业提供全面的财务和法律支持。包括日常账务处理、税务筹划、法律咨询等多方面服务，帮助您的企业合规经营，降低风险。",
  }

  return (
    <main className="pb-20">
      <IOSHeader title="服务详情" showBack />

      <div className="aspect-video relative bg-gray-100">
        <Image src="/placeholder.svg" alt="Service image" fill className="object-cover" />
      </div>

      <div className="p-4 bg-white">
        <div className="mb-4">
          <h1 className="text-xl font-medium mb-2">{service.title}</h1>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-medium text-[#00b578]">¥{service.memberPrice}</span>
          <span className="text-gray-400 line-through">¥{service.normalPrice}</span>
          <span className="text-sm text-gray-500">/月</span>
        </div>

        <div className="py-4 border-t">
          <h2 className="font-medium mb-2">服务说明</h2>
          <p className="text-sm text-gray-600">{service.details}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-4">
        <Button variant="outline" className="flex-1">
          加入购物车
        </Button>
        <Button className="flex-1 bg-[#00b578] hover:bg-[#00a066]">立即购买</Button>
      </div>
    </main>
  )
}

