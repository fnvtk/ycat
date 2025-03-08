import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Profile() {
  return (
    <main className="pb-20 bg-[#00b578] max-w-[390px] mx-auto min-h-screen">
      <IOSHeader title="会员中心" showBack={false} />

      <div className="p-4 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
          <Image
            src="https://i.pravatar.cc/150?img=3"
            alt="Avatar"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white">
          <h2 className="text-lg font-medium">张伟</h2>
          <p className="text-sm opacity-80">高级会员</p>
        </div>
        <Link href="/profile/member-code" className="ml-auto bg-black/20 px-3 py-1 rounded-full">
          <span className="text-white text-sm">会员码</span>
        </Link>
      </div>

      <div className="bg-white rounded-t-3xl mt-4 p-4">
        <div className="grid grid-cols-3 gap-4 py-6 border-b">
          <Link href="/profile/wallet" className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#e6f7ff] flex items-center justify-center">
              <span className="text-[#1890ff] text-xl">¥</span>
            </div>
            <span className="text-xs">我的钱包</span>
          </Link>
          <Link href="/profile/vip" className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#fff0f6] flex items-center justify-center">
              <span className="text-[#eb2f96] text-xl">VIP</span>
            </div>
            <span className="text-xs">会员特权</span>
          </Link>
          <Link href="/profile/accepted-orders" className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#f6ffed] flex items-center justify-center">
              <span className="text-[#52c41a] text-xl">单</span>
            </div>
            <span className="text-xs">已接订单</span>
          </Link>
        </div>

        <div className="py-2">
          {[
            { title: "我的订单", link: "/profile/orders" },
            { title: "已接订单", link: "/profile/accepted-orders" },
            { title: "浏览历史", link: "/profile/history" },
            { title: "私域操盘手", link: "https://cukebao.vercel.app", external: true },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={item.external ? "_blank" : undefined}
              className="flex items-center justify-between w-full py-4 border-b last:border-none px-4"
            >
              <span>{item.title}</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  )
}

// 由存客宝技术团队开发

