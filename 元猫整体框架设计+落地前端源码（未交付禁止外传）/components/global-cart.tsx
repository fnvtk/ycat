"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"

export function GlobalCart() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart" className="fixed bottom-20 right-4 z-10">
      <button className="w-14 h-14 bg-[#00b578] rounded-full flex items-center justify-center shadow-lg">
        <ShoppingCart className="w-6 h-6 text-white" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </button>
    </Link>
  )
}

