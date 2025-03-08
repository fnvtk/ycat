import { IOSHeader } from "@/components/ios-header"

export default function VIP() {
  const vipBenefits = ["优先客服支持", "专属优惠活动", "高级财务分析工具", "免费专业咨询服务"]

  return (
    <main className="pb-20">
      <IOSHeader title="会员特权" showBack />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">尊享VIP特权</h2>
        <ul className="list-disc pl-5">
          {vipBenefits.map((benefit, index) => (
            <li key={index} className="mb-2">
              {benefit}
            </li>
          ))}
        </ul>
        {/* 这里可以添加升级VIP的按钮或其他相关功能 */}
      </div>
    </main>
  )
}

