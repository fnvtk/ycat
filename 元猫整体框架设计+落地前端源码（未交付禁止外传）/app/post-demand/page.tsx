"use client"

import type React from "react"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function PostDemand() {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    deadline: "",
    location: "",
    type: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (
      !formData.title ||
      !formData.description ||
      !formData.price ||
      !formData.deadline ||
      !formData.location ||
      !formData.type
    ) {
      toast({
        title: "表单不完整",
        description: "请填写所有必填字段",
        variant: "destructive",
      })
      return
    }

    // Submit form
    toast({
      title: "需求已发布",
      description: "您的需求已成功发布，请等待会计接单",
    })

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="发布需求" showBack />

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            需求标题 <span className="text-red-500">*</span>
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="请输入需求标题"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            需求类型 <span className="text-red-500">*</span>
          </label>
          <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="选择需求类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="公司注册变更">公司注册变更</SelectItem>
              <SelectItem value="知识产权">知识产权</SelectItem>
              <SelectItem value="财务咨询">财务咨询</SelectItem>
              <SelectItem value="税务筹划">税务筹划</SelectItem>
              <SelectItem value="其他">其他</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            需求描述 <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="请详细描述您的需求"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            预算金额 (元) <span className="text-red-500">*</span>
          </label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="请输入预算金额"
            required
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
            截止日期 <span className="text-red-500">*</span>
          </label>
          <Input id="deadline" name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            所在地区 <span className="text-red-500">*</span>
          </label>
          <Select value={formData.location} onValueChange={(value) => handleSelectChange("location", value)}>
            <SelectTrigger>
              <SelectValue placeholder="选择所在地区" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="北京市">北京市</SelectItem>
              <SelectItem value="上海市">上海市</SelectItem>
              <SelectItem value="广东省-广州市">广东省-广州市</SelectItem>
              <SelectItem value="广东省-深圳市">广东省-深圳市</SelectItem>
              <SelectItem value="浙江省-杭州市">浙江省-杭州市</SelectItem>
              <SelectItem value="福建省-厦门市">福建省-厦门市</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-[#00b578] hover:bg-[#00a066]">
          发布需求
        </Button>
      </form>

      <div className="p-4 text-sm text-gray-500">
        <p>提示：</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>请详细描述您的需求，以便会计能够更好地理解和接单</li>
          <li>预算金额请根据市场行情合理填写</li>
          <li>发布后可在"我的需求"中查看需求状态</li>
        </ul>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

