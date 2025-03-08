import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  id: number
  name: string
  price: number
  quantity: number
}

export function CartItem({ id, name, price, quantity }: CartItemProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">¥{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1">
          <Minus className="w-4 h-4 text-gray-400" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button className="p-1">
          <Plus className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <button className="ml-4 p-1">
        <Trash2 className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  )
}

