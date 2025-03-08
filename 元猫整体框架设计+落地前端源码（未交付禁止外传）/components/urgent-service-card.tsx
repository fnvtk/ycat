import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface UrgentServiceCardProps {
  title: string
  price: number
  location: string
  deadline: string
  isUrgent: boolean
  onAddToCart: () => void
}

export function UrgentServiceCard({ title, price, location, deadline, isUrgent, onAddToCart }: UrgentServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 mb-3 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {isUrgent && <span className="text-red-500 text-xs border border-red-500 px-1 rounded">急</span>}
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="text-sm text-gray-500">费用:¥{price}</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>交付地址: {location}</div>
        <div>到期时间: {deadline}</div>
      </div>

      <div className="mt-3">
        <Button onClick={onAddToCart} className="w-full bg-[#00b578] hover:bg-[#00a066]">
          <ShoppingCart className="w-4 h-4 mr-2" />
          加入购物车
        </Button>
      </div>
    </div>
  )
}

