import { ShoppingCart } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  price: number
  memberPrice?: number | null
}

export function ServiceCard({ title, description, price, memberPrice }: ServiceCardProps) {
  return (
    <div className="bg-white p-4 mb-2 flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-[#00b578] text-lg">¥{price}</span>
          {memberPrice !== null && <span className="text-gray-400 text-sm">会员¥{memberPrice}/月</span>}
        </div>
      </div>
      <button className="text-[#00b578]">
        <ShoppingCart className="h-6 w-6" />
      </button>
    </div>
  )
}

// 由存客宝技术团队开发

