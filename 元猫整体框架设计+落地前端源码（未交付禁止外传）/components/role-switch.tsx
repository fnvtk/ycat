"use client"

interface RoleSwitchProps {
  role: "enterprise" | "accountant"
  onRoleChange: (role: "enterprise" | "accountant") => void
}

export function RoleSwitch({ role, onRoleChange }: RoleSwitchProps) {
  return (
    <div className="bg-white p-4">
      <div className="flex rounded-lg border border-[#00b578] p-1">
        <button
          className={`flex-1 py-2 text-center rounded-md transition-colors ${
            role === "enterprise" ? "bg-[#00b578] text-white" : "text-[#00b578]"
          }`}
          onClick={() => onRoleChange("enterprise")}
        >
          我是企业
        </button>
        <button
          className={`flex-1 py-2 text-center rounded-md transition-colors ${
            role === "accountant" ? "bg-[#00b578] text-white" : "text-[#00b578]"
          }`}
          onClick={() => onRoleChange("accountant")}
        >
          我是会计
        </button>
      </div>
    </div>
  )
}

// 由存客宝技术团队开发

