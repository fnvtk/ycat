"use client"

import { useState, useEffect } from "react"

export function PlatformStats() {
  const [stats, setStats] = useState({
    accountants: 0,
    enterprises: 0,
    connections: 0,
  })

  useEffect(() => {
    setStats({
      accountants: Math.floor(Math.random() * 1000) + 4000,
      enterprises: Math.floor(Math.random() * 2000) + 6000,
      connections: Math.floor(Math.random() * 5000) + 15000,
    })
  }, [])

  return (
    <div className="bg-[#00b578] text-white px-4 py-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-medium mb-1">{stats.accountants}</div>
          <div className="text-sm opacity-80">注册会计</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-medium mb-1">{stats.enterprises}</div>
          <div className="text-sm opacity-80">企业用户</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-medium mb-1">{stats.connections}</div>
          <div className="text-sm opacity-80">成功对接</div>
        </div>
      </div>
    </div>
  )
}

// 由存客宝技术团队开发

