import { IOSHeader } from "@/components/ios-header"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Settings() {
  const settingsItems = [
    { title: "个人信息", link: "/profile/settings/personal-info" },
    { title: "账号安全", link: "/profile/settings/security" },
    { title: "隐私设置", link: "/profile/settings/privacy" },
    { title: "通知设置", link: "/profile/settings/notifications" },
    { title: "关于我们", link: "/profile/settings/about" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="设置" showBack />
      <div className="mt-4">
        {settingsItems.map((item, index) => (
          <Link key={index} href={item.link} className="flex items-center justify-between p-4 bg-white border-b">
            <span>{item.title}</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
      <div className="mt-8 px-4">
        <button className="w-full py-3 bg-white text-red-500 rounded-lg">退出登录</button>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

