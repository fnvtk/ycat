import { IOSHeader } from "@/components/ios-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Help() {
  const faqItems = [
    {
      question: "如何注册成为会员？",
      answer: "您可以点击首页的&quot;注册&quot;按钮，填写相关信息即可成为我们的会员。",
    },
    {
      question: "如何联系客服？",
      answer: "您可以在&quot;我的&quot;页面找到&quot;联系客服&quot;选项，或者拨打我们的客服热线400-123-4567。",
    },
    {
      question: "如何申请退款？",
      answer: "请在&quot;我的订单&quot;中找到相应订单，点击&quot;申请退款&quot;，按照提示操作即可。",
    },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="帮助中心" showBack />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">常见问题</h2>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  )
}

// 由存客宝技术团队开发

