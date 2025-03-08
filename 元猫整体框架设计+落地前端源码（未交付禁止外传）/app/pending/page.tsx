"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PendingItem {
  id: string
  title: string
  status: "待处理" | "处理中" | "已完成" | "已取消"
  date: string
  deadline: string
  accountant?: string
}

export default function Pending() {
  const { toast } = useToast()
  const [pendingItems] = useState<PendingItem[]>([
    {
      id: "1",
      title: "增资并释放股权，同时变更地址",
      status: "待处理",
      date: "2024-02-01",
      deadline: "2024-02-10",
    },
    {
      id: "2",
      title: "要变更公司法人",
      status: "处理中",
      date: "2024-01-25",
      deadline: "2024-02-10",
      accountant: "李静",
    },
    {
      id: "3",
      title: "需要申请一个软件著作权",
      status: "已完成",
      date: "2024-01-15",
      deadline: "2024-02-05",
      accountant: "王芳",
    },
    {
      id: "4",
      title: "公司注销咨询",
      status: "已取消",
      date: "2024-01-10",
      deadline: "2024-01-20",
    },
  ])

  const handleCancel = (id: string) => {
    toast({
      title: "已取消",
      description: "您的需求已成功取消",
    })
  }

  const handleRemind = (id: string) => {
    toast({
      title: "已提醒",
      description: "已向会计发送提醒消息",
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "待处理":
        return <Clock className="h-5 w-5 text-orange-500" />
      case "处理中":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "已完成":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "已取消":
        return <AlertCircle className="h-5 w-5 text-gray-500" />
      default:
        return null
    }
  }

  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="待处理单" showBack />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="pending">待处理</TabsTrigger>
          <TabsTrigger value="processing">处理中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="p-4 space-y-4">
          {pendingItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{item.title}</h3>
                <div className="flex items-center gap-1">
                  {getStatusIcon(item.status)}
                  <span
                    className={`text-sm ${
                      item.status === "待处理"
                        ? "text-orange-500"
                        : item.status === "处理中"
                          ? "text-blue-500"
                          : item.status === "已完成"
                            ? "text-green-500"
                            : "text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>发布日期：{item.date}</p>
                <p>截止日期：{item.deadline}</p>
                {item.accountant && <p>处理会计：{item.accountant}</p>}
              </div>

              <div className="mt-3 flex justify-end gap-2">
                {item.status === "待处理" && (
                  <Button variant="outline" size="sm" onClick={() => handleCancel(item.id)}>
                    取消需求
                  </Button>
                )}

                {item.status === "处理中" && (
                  <Button variant="outline" size="sm" onClick={() => handleRemind(item.id)}>
                    提醒会计
                  </Button>
                )}

                {(item.status === "待处理" || item.status === "处理中") && (
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    查看详情
                  </Button>
                )}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="p-4 space-y-4">
          {pendingItems
            .filter((item) => item.status === "待处理")
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-orange-500">{item.status}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>发布日期：{item.date}</p>
                  <p>截止日期：{item.deadline}</p>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleCancel(item.id)}>
                    取消需求
                  </Button>
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    查看详情
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="processing" className="p-4 space-y-4">
          {pendingItems
            .filter((item) => item.status === "处理中")
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-blue-500">{item.status}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>发布日期：{item.date}</p>
                  <p>截止日期：{item.deadline}</p>
                  <p>处理会计：{item.accountant}</p>
                </div>

                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleRemind(item.id)}>
                    提醒会计
                  </Button>
                  <Button size="sm" className="bg-[#00b578] hover:bg-[#00a066]">
                    查看详情
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="completed" className="p-4 space-y-4">
          {pendingItems
            .filter((item) => item.status === "已完成" || item.status === "已取消")
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    {item.status === "已完成" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-gray-500" />
                    )}
                    <span className={`text-sm ${item.status === "已完成" ? "text-green-500" : "text-gray-500"}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>发布日期：{item.date}</p>
                  <p>截止日期：{item.deadline}</p>
                  {item.accountant && <p>处理会计：{item.accountant}</p>}
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
    </main>
  )
}

// 由存客宝技术团队开发

