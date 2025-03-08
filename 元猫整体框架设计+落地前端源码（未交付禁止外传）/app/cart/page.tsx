import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"

export default function Cart() {
  const cartItems = [
    { id: 1, name: "财务法务一体化服务", price: 3800, quantity: 1 },
    { id: 2, name: "上门财务服务", price: 3000, quantity: 1 },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="pb-20">
      <IOSHeader title="购物车" showBack />

      <div className="p-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">总计：</span>
          <span className="text-xl font-medium text-[#00b578]">¥{total}</span>
        </div>
        <Button className="w-full bg-[#00b578] hover:bg-[#00a066]">结算 ({cartItems.length})</Button>
      </div>

      <BottomNav />
    </main>
  )
}

// 由存客宝技术团队开发

