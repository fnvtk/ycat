import { IOSHeader } from "@/components/ios-header"
import { Card } from "@/components/ui/card"
import { Brain, FileSpreadsheet, MessageSquare, BarChart3, Users, RefreshCw } from "lucide-react"

export default function AIFinance() {
  const features = [
    {
      icon: Brain,
      title: "智能记账",
      description: "AI自动识别票据，智能分类记账",
    },
    {
      icon: FileSpreadsheet,
      title: "自动报表",
      description: "自动生成各类财务报表和分析",
    },
    {
      icon: MessageSquare,
      title: "私域运营",
      description: "对接企业微信，智能客户管理",
    },
    {
      icon: BarChart3,
      title: "数据分析",
      description: "AI驱动的财务数据分析和决策",
    },
    {
      icon: Users,
      title: "客户管理",
      description: "智能化客户画像和服务匹配",
    },
    {
      icon: RefreshCw,
      title: "自动化工作流",
      description: "智能化工作流程自动处理",
    },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="智能财务系统" showBack />

      <div className="p-4 grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="p-4">
              <Icon className="w-8 h-8 text-[#00b578] mb-2" />
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </Card>
          )
        })}
      </div>

      {/* AI助手聊天入口 */}
      <div className="fixed bottom-20 right-4">
        <button className="w-12 h-12 bg-[#00b578] rounded-full flex items-center justify-center shadow-lg">
          <Brain className="w-6 h-6 text-white" />
        </button>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

