"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { CheckCircle, Clock, XCircle, MessageSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OrderItem {
  id: string
  title: string
  status: "待接单" | "进行中" | "已完成" | "已拒绝"
  client: string
  date: string
  deadline: string
  price: number
}

export default function MyOrders() {
  const { toast } = useToast()
  const [orders] = useState<OrderItem[]>([
    {
      id: "1",
      title: "月度财务报表制作",
      status: "待接单",
      client: "厦门科技有限公司",
      date: "2024-02-05",
      deadline: "2024-03-15",
      price: 2000,
    },
    {
      id: "2",
      title: "税务筹划方案",
      status: "进行中",
      client: "福州贸易有限公司",
      date: "2024-02-01",
      deadline: "2024-03-20",
      price: 5000,
    },
    {
      id: "3",
      title: "年度审计准备",
      status: "已完成",
      client: "泉州制造有限公司",
      date: "2024-01-15",
      deadline: "2024-02-28",
      price: 8000,
    },
    {
      id: "4",
      title: "公司注销咨询",
      status: "已拒绝",
      client: "漳州贸易有限公司",
      date: "2024-01-10",
      deadline: "2024-01-25",
      price: 3000,
    },
  ])

  // Update the handleAccept function to include the payment calculation and AI assistant notification
  const handleAccept = (id: string) => {
    // Find the order
    const order = orders.find((o) => o.id === id)
    if (!order) return

    // Calculate payment amount (10% of order price, minimum 50 yuan)
    const paymentAmount = Math.max(order.price * 0.1, 50)

    // Show confirmation dialog
    if (confirm(`确认接单？将收取¥${paymentAmount}服务费（订单金额的10%，最低50元），订单将添加至AI助理手机。`)) {
      toast({
        title: "接单成功",
        description: `您已成功接下此订单，请查看AI助理手机获取详情。`,
      })
      // 这里可以添加接单逻辑，比如发送请求到服务器
    }
  }

  const handleReject = (id: string) => {
    toast({
      title: "已拒绝",
      description: "您已拒绝此订单",
    })
  }

  const handleContact = (id: string) => {
    toast({
      title: "联系客户",
      description: "正在打开聊天窗口...",
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "待接单":
        return <Clock className="h-5 w-5 text-orange-500" />
      case "进行中":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "已完成":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "已拒绝":
        return <XCircle className="h-5 w-5 text-gray-500" />
      default:
        return null
    }
  }

  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="我的接单" showBack />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="pending">待接单</TabsTrigger>
          <TabsTrigger value="processing">进行中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="p-4 space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{order.title}</h3>
                <div className="flex items-center gap-1">
                  {getStatusIcon(order.status)}
                  <span
                    className={`text-sm ${
                      order.status === "待接单"
                        ? "text-orange-500"
                        : order.status === "进行中"
                          ? "text-blue-500"
                          : order.status === "已完成"
                            ? "text-green-500"
                            : "text-gray-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>客户：{order.client}</p>
                <p>发布日期：{order.date}</p>
                <p>截止日期：{order.deadline}</p>
                <p className="text-[#00b578] font-medium">报酬：¥{order.price}</p>
              </div>

              <div className="mt-3 flex justify-end gap-2">
                {order.status === "待接单" && (
                  <>
                    <Button variant="outline" size="sm" onClick={() => handleReject(order.id)}>
                      拒绝
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#00b578] hover:bg-[#00a066]"
                      onClick={() => handleAccept(order.id)}
                    >
                      接单
                    </Button>
                  </>
                )}

                {order.status === "进行中" && (
                  <>
                    <Button variant="outline" size="sm" onClick={() => handleContact(order.id)}>
                      <MessageSquare className="h-4 w-4 mr-1" />
                      联系客户
                    </Button>
                    <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                      提交成果
                    </Button>
                  </>
                )}

                {(order.status === "已完成" || order.status === "已拒绝") && (
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    查看详情
                  </Button>
                )}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="p-4 space-y-4">
          {orders
            .filter((order) => order.status === "待接单")
            .map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{order.title}</h3>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-orange-500">{order.status}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>客户：{order.client}</p>
                  <p>发布日期：{order.date}</p>
                  <p>截止日期：{order.deadline}</p>
                  <p className="text-[#00b578] font-medium">报酬：¥{order.price}</p>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleReject(order.id)}>
                    拒绝
                  </Button>
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]" onClick={() => handleAccept(order.id)}>
                    接单
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="processing" className="p-4 space-y-4">
          {orders
            .filter((order) => order.status === "进行中")
            .map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{order.title}</h3>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-blue-500">{order.status}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>客户：{order.client}</p>
                  <p>发布日期：{order.date}</p>
                  <p>截止日期：{order.deadline}</p>
                  <p className="text-[#00b578] font-medium">报酬：¥{order.price}</p>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleContact(order.id)}>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    联系客户
                  </Button>
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    提交成果
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="completed" className="p-4 space-y-4">
          {orders
            .filter((order) => order.status === "已完成" || order.status === "已拒绝")
            .map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{order.title}</h3>
                  <div className="flex items-center gap-1">
                    {order.status === "已完成" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-gray-500" />
                    )}
                    <span className={`text-sm ${order.status === "已完成" ? "text-green-500" : "text-gray-500"}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>客户：{order.client}</p>
                  <p>发布日期：{order.date}</p>
                  <p>截止日期：{order.deadline}</p>
                  <p className="text-[#00b578] font-medium">报酬：¥{order.price}</p>
                </div>

                <div className="mt-3 flex justify-end">
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    查看详情
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>
      </Tabs>

      <BottomNav />
    </main>
  )
}

// 由存客宝技术团队开发

