import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Users, Trophy, DollarSign, Phone, MessageCircleIcon as Message, Building, Clock } from "lucide-react"

interface AccountantStats {
  rating: number
  clients: number
  experience: number
  monthlyIncome: number
}

interface ServiceArea {
  title: string
  items: string[]
}

export default function AccountantProfile() {
  const stats: AccountantStats = {
    rating: 4.9,
    clients: 56,
    experience: 8,
    monthlyIncome: 25000,
  }

  const serviceAreas: ServiceArea[] = [
    {
      title: "擅长领域",
      items: ["企业财税咨询", "财务报表分析", "税务筹划", "企业成本管理"],
    },
    {
      title: "资质证书",
      items: ["注册会计师", "税务师", "资产评估师"],
    },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="会计详情" />

      <div className="p-4 bg-[#00b578] text-white">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="会计头像"
            className="w-20 h-20 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-xl font-bold">李静</h1>
            <p className="text-sm opacity-90">高级会计师 | 8年经验</p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{stats.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 bg-white">
        <Card className="p-4 text-center">
          <Users className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">{stats.clients}</div>
          <div className="text-sm text-gray-500">服务客户</div>
        </Card>
        <Card className="p-4 text-center">
          <Trophy className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">{stats.experience}年</div>
          <div className="text-sm text-gray-500">从业经验</div>
        </Card>
        <Card className="p-4 text-center">
          <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">¥{stats.monthlyIncome}</div>
          <div className="text-sm text-gray-500">月收入</div>
        </Card>
        <Card className="p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2 text-[#00b578]" />
          <div className="text-lg font-bold">98%</div>
          <div className="text-sm text-gray-500">准时率</div>
        </Card>
      </div>

      <div className="p-4 space-y-4">
        {serviceAreas.map((area, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-2">{area.title}</h2>
            <div className="flex flex-wrap gap-2">
              {area.items.map((item, itemIndex) => (
                <span key={itemIndex} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-4">
        <Button variant="outline" className="flex-1">
          <Phone className="w-4 h-4 mr-2" />
          联系电话
        </Button>
        <Button variant="outline" className="flex-1">
          <Message className="w-4 h-4 mr-2" />
          在线咨询
        </Button>
        <Button className="flex-1 bg-[#00b578]">
          <Building className="w-4 h-4 mr-2" />
          立即合作
        </Button>
      </div>
    </main>
  )
}

