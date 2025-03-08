"use client"

import type React from "react"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { CreditCard, Smartphone, Wallet } from "lucide-react"

export default function Payment() {
  const { toast } = useToast()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("wechat")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount) {
      toast({
        title: "请输入金额",
        description: "付款金额不能为空",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "付款成功",
      description: `您已成功支付 ${amount} 元`,
    })

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  return (
    <main className="pb-20 max-w-[390px] mx-auto">
      <IOSHeader title="付款" showBack />

      <div className="p-4 bg-[#00b578] text-white">
        <h2 className="text-sm opacity-80">付款金额</h2>
        <div className="flex items-center mt-2">
          <span className="text-2xl mr-2">¥</span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="请输入金额"
            className="bg-transparent border-none text-3xl font-bold text-white placeholder:text-white/50 focus-visible:ring-0 p-0 h-auto"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">选择付款方式</h3>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
            <div className="flex items-center space-x-2 border p-3 rounded-lg">
              <RadioGroupItem value="wechat" id="wechat" />
              <Label htmlFor="wechat" className="flex items-center gap-2 cursor-pointer">
                <Smartphone className="h-5 w-5 text-green-500" />
                <span>微信支付</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-lg">
              <RadioGroupItem value="alipay" id="alipay" />
              <Label htmlFor="alipay" className="flex items-center gap-2 cursor-pointer">
                <Smartphone className="h-5 w-5 text-blue-500" />
                <span>支付宝</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-lg">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                <CreditCard className="h-5 w-5 text-gray-500" />
                <span>银行卡</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-lg">
              <RadioGroupItem value="balance" id="balance" />
              <Label htmlFor="balance" className="flex items-center gap-2 cursor-pointer">
                <Wallet className="h-5 w-5 text-[#00b578]" />
                <span>账户余额</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" className="w-full bg-[#00b578] hover:bg-[#00a066]">
          确认付款
        </Button>
      </form>

      <div className="p-4 text-sm text-gray-500">
        <p>说明：</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>付款成功后，系统将自动为您生成电子发票</li>
          <li>如需纸质发票，请联系客服</li>
          <li>付款问题请拨打客服热线：400-123-4567</li>
        </ul>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

