"use client"

import { useState, useEffect } from "react"

export function useCart() {
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    // 这里可以从本地存储或API获取购物车数量
    const storedCount = localStorage.getItem("cartItemCount")
    if (storedCount) {
      setItemCount(Number.parseInt(storedCount, 10))
    }
  }, [])

  const addToCart = (count = 1) => {
    setItemCount((prev) => {
      const newCount = prev + count
      localStorage.setItem("cartItemCount", newCount.toString())
      return newCount
    })
  }

  return { itemCount, addToCart }
}

// 由存客宝技术团队开发

