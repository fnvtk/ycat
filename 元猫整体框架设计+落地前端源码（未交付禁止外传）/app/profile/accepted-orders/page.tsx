import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function AcceptedOrders() {
  const orders = [
    {
      id: 1,
      service: "公司注册变更",
      status: "进行中",
      date: "2024-02-01",
      deadline: "2024-02-15",
      accountant: "李静",
      price: 500,
    },
    {
      id: 2,
      service: "软件著作权申请",
      status: "已完成",
      date: "2024-01-15",
      deadline: "2024-02-05",
      accountant: "王芳",
      price: 800,
    },
  ]

  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="已接订单" showBack />
      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{order.service}</h3>
              <div className="flex items-center gap-1">
                {order.status === "进行中" ? (
                  <Clock className="h-5 w-5 text-blue-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                <span className={`text-sm ${order.status === "进行中" ? "text-blue-500" : "text-green-500"}`}>
                  {order.status}
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p>发布日期：{order.date}</p>
              <p>截止日期：{order.deadline}</p>
              <p>处理会计：{order.accountant}</p>
              <p className="text-[#00b578] font-medium">金额：¥{order.price}</p>
            </div>

            <div className="mt-3 flex justify-end gap-2">
              {order.status === "进行中" && (
                <>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    联系会计
                  </Button>
                  <Link href={`/profile/accepted-orders/${order.id}`}>
                    <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                      查看详情
                    </Button>
                  </Link>
                </>
              )}

              {order.status === "已完成" && (
                <>
                  <Button variant="outline" size="sm">
                    评价
                  </Button>
                  <Link href={`/profile/accepted-orders/${order.id}`}>
                    <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                      查看详情
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

