"use client"

import * as React from "react"
import { X } from "lucide-react"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Dialog content */}
      <div className="relative z-50 w-full max-w-4xl mx-4">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  )
}
