import { IOSHeader } from "@/components/ios-header"

export default function Orders() {
  const orders = [
    { id: 1, service: "公司注册变更", status: "进行中", date: "2023-06-01", price: 500 },
    { id: 2, service: "软件著作权申请", status: "已完成", date: "2023-05-15", price: 800 },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="我的订单" showBack />
      <div className="p-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold">{order.service}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">{order.date}</span>
              <span className={`${order.status === "进行中" ? "text-blue-500" : "text-green-500"}`}>
                {order.status}
              </span>
            </div>
            <div className="mt-2 text-right">
              <span className="text-[#00b578] font-bold">¥{order.price.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

