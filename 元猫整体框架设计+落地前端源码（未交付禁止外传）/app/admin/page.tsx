"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function AdminPanel() {
  const { toast } = useToast()
  const [config, setConfig] = useState({
    appName: "元猫财务服务平台",
    primaryColor: "#00b578",
    secondaryColor: "#1890ff",
    maxOrdersPerDay: "100",
    commissionRate: "0.1",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setConfig((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该发送配置到后端
    console.log("Saving configuration:", config)
    toast({
      title: "配置已保存",
      description: "小程序配置已成功更新",
    })
  }

  return (
    <main className="pb-20">
      <IOSHeader title="后台管理" showBack />

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label htmlFor="appName" className="block text-sm font-medium text-gray-700">
            应用名称
          </label>
          <Input id="appName" name="appName" value={config.appName} onChange={handleChange} className="mt-1" />
        </div>

        <div>
          <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
            主色调
          </label>
          <Input
            id="primaryColor"
            name="primaryColor"
            type="color"
            value={config.primaryColor}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">
            次色调
          </label>
          <Input
            id="secondaryColor"
            name="secondaryColor"
            type="color"
            value={config.secondaryColor}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="maxOrdersPerDay" className="block text-sm font-medium text-gray-700">
            每日最大订单数
          </label>
          <Input
            id="maxOrdersPerDay"
            name="maxOrdersPerDay"
            type="number"
            value={config.maxOrdersPerDay}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="commissionRate" className="block text-sm font-medium text-gray-700">
            佣金比例
          </label>
          <Input
            id="commissionRate"
            name="commissionRate"
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={config.commissionRate}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full bg-[#00b578] hover:bg-[#00a066]">
          保存配置
        </Button>
      </form>
    </main>
  )
}

