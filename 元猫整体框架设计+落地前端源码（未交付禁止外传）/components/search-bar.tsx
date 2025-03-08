"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className={`
      flex items-center gap-2 bg-gray-100 rounded-full p-2 mx-4 my-2
      ${isFocused ? "ring-2 ring-[#00b578]" : ""}
    `}
    >
      <Search className="w-4 h-4 text-gray-400" />
      <input
        type="search"
        placeholder="搜索服务"
        className="flex-1 bg-transparent outline-none text-sm"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

