import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { QrCode, Share2 } from "lucide-react"
import Image from "next/image"

export default function MemberCode() {
  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="会员码" showBack />

      <div className="p-4 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-white mb-4">
          <Image
            src="https://i.pravatar.cc/150?img=3"
            alt="Avatar"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold mb-1">张伟</h2>
        <p className="text-gray-500 mb-6">高级会员</p>

        <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-xs flex flex-col items-center">
          <div className="border-4 border-[#00b578] p-2 rounded-lg mb-4">
            <QrCode className="w-48 h-48 text-[#00b578]" />
          </div>

          <p className="text-center text-gray-600 mb-4">扫描上方二维码，加入元猫财税服务平台</p>

          <div className="flex gap-4 w-full">
            <Button variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              分享
            </Button>
            <Button className="flex-1 bg-[#00b578] hover:bg-[#00a066]">保存图片</Button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm w-full">
          <h3 className="font-medium mb-2">会员特权</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00b578] rounded-full mr-2"></span>
              专属会员价格优惠
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00b578] rounded-full mr-2"></span>
              优先接单权益
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00b578] rounded-full mr-2"></span>
              专属客服一对一服务
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00b578] rounded-full mr-2"></span>
              每月免费咨询服务
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

