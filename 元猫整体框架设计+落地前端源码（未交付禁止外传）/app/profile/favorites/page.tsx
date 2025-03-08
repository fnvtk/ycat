import { IOSHeader } from "@/components/ios-header"

export default function Favorites() {
  const favoriteServices = [
    { id: 1, name: "公司注册服务", description: "一站式公司注册解决方案" },
    { id: 2, name: "财务咨询", description: "专业财务顾问为您解答疑难" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="收藏服务" showBack />
      <div className="p-4">
        {favoriteServices.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold">{service.name}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

