"use client"

import { useState } from "react"
import { IOSHeader } from "@/components/ios-header"
import { BottomNav } from "@/components/bottom-nav"
import { QuickActions } from "@/components/quick-actions"
import { DemandList } from "@/components/demand-list"
import { PlatformStats } from "@/components/platform-stats"
import { RoleSwitch } from "@/components/role-switch"

export default function Home() {
  const [role, setRole] = useState<"enterprise" | "accountant">("enterprise")

  return (
    <main className="pb-20">
      <IOSHeader title="元猫财税服务" showBack={false} />

      {/* 角色切换 */}
      <RoleSwitch role={role} onRoleChange={setRole} />

      {/* 数据统计 */}
      <PlatformStats />

      {/* 快捷功能区 */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-medium mb-4">快捷功能</h2>
        <QuickActions role={role} />
      </div>

      {/* 最新需求或订单 */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">{role === "enterprise" ? "最新需求" : "最新订单"}</h2>
          <button className="text-[#00b578] text-sm">查看全部</button>
        </div>
        <DemandList role={role} />
      </div>

      <BottomNav />
    </main>
  )
}

// 由存客宝技术团队开发

