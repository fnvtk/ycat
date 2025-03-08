import { IOSHeader } from "@/components/ios-header"

export default function History() {
  const browsingHistory = [
    { id: 1, name: "如何选择合适的公司类型", type: "文章", date: "2023-06-05" },
    { id: 2, name: "年度税务筹划服务", type: "服务", date: "2023-06-03" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="浏览历史" showBack />
      <div className="p-4">
        {browsingHistory.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold">{item.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">{item.type}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

