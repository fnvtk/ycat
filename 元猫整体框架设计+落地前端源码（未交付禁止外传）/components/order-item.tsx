import Link from "next/link"

interface OrderItemProps {
  id: number
  service: string
  status: string
  date: string
  price: number
}

export function OrderItem({ id, service, status, date, price }: OrderItemProps) {
  return (
    <Link href={`/profile/orders/${id}`} className="block bg-white rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{service}</h3>
        <span className="text-[#00b578]">{status}</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">订单日期：{date}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">订单金额：</span>
        <span className="text-lg font-medium">¥{price}</span>
      </div>
    </Link>
  )
}

