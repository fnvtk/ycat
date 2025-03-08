import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ServiceDetail() {
  return (
    <main className="pb-20">
      <IOSHeader title="元猫会员专供" showBack />

      <div className="aspect-video relative bg-gray-100">
        <Image src="/placeholder.svg" alt="Service image" fill className="object-cover" />
      </div>

      <div className="p-4 bg-white">
        <div className="mb-4">
          <h1 className="text-xl font-medium mb-2">财务法务一体化服务</h1>
          <p className="text-gray-600 text-sm">提供财务、税务、法务全栈服务</p>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-medium text-[#00b578]">¥3800</span>
          <span className="text-gray-400 line-through">¥4800</span>
          <span className="text-sm text-gray-500">/月</span>
        </div>

        <div className="py-4 border-t">
          <h2 className="font-medium mb-2">服务说明</h2>
          <p className="text-sm text-gray-600">
            提供财务、税务、法务相关服务，包括但不限于： - 日常账务处理 - 税务申报 - 法律咨询 - 合同审查
          </p>
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

// 由存客宝技术团队开发

