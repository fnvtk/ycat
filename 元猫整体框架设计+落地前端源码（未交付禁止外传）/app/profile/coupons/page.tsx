import { IOSHeader } from "@/components/ios-header"

export default function Coupons() {
  const coupons = [
    { id: 1, name: "新用户优惠券", discount: 50, minPurchase: 100, expiry: "2023-12-31" },
    { id: 2, name: "周年庆优惠券", discount: 100, minPurchase: 500, expiry: "2023-11-30" },
  ]

  return (
    <main className="pb-20">
      <IOSHeader title="优惠券" showBack />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">我的优惠券</h2>
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="font-bold text-lg">{coupon.name}</h3>
            <p className="text-[#00b578]">
              满{coupon.minPurchase}减{coupon.discount}
            </p>
            <p className="text-sm text-gray-500">有效期至：{coupon.expiry}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

