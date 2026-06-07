"use client"

import { useState, useEffect, useRef } from "react"

const LINES = [
  { text: "$ shiro run", cls: "text-primary" },
  { text: "[Config] Resolved GEMINI_API_KEY = ***", cls: "text-zinc-400" },
  {
    text: "[Config] Resolved env var in config: api_key",
    cls: "text-zinc-400",
  },
  {
    text: "[Shiro] Starting workflow: deployment-governance",
    cls: "text-zinc-400",
  },
  { text: "", cls: "" },
  { text: "[Shiro] Step get-diff completed", cls: "text-emerald-400" },
  { text: "[Shiro] Step risk-analysis completed", cls: "text-emerald-400" },
  { text: "[Shiro] Step ai-review completed", cls: "text-emerald-400" },
  {
    text: "[Shiro] Step post-inline-comments completed",
    cls: "text-emerald-400",
  },
  { text: "[Shiro] Step post-summary completed", cls: "text-emerald-400" },
  { text: "", cls: "" },
  {
    text: "[Shiro] Workflow deployment-governance completed successfully",
    cls: "text-emerald-300 font-semibold",
  },
  { text: "", cls: "" },
  { text: "=== Workflow Results ===", cls: "text-zinc-300" },
  { text: "Step: ai-review", cls: "text-zinc-400" },
  { text: "  Success: true", cls: "text-emerald-400" },
  {
    text: "  Tokens: 5,639 (2,774 prompt + 2,865 completion)",
    cls: "text-sky-400",
  },
  { text: "", cls: "" },
  { text: "Step: get-diff", cls: "text-zinc-400" },
  { text: "  Success: true", cls: "text-emerald-400" },
  { text: "  Diff: 147 lines changed", cls: "text-sky-400" },
  { text: "", cls: "" },
  { text: "Step: post-inline-comments", cls: "text-zinc-400" },
  { text: "  Success: true", cls: "text-emerald-400" },
  { text: "  Posted: 15 comments, skipped: 0", cls: "text-sky-400" },
  { text: "", cls: "" },
  { text: "Step: post-summary", cls: "text-zinc-400" },
  { text: "  Success: true", cls: "text-emerald-400" },
  { text: "  Comment posted successfully", cls: "text-sky-400" },
  { text: "", cls: "" },
  { text: "Step: risk-analysis", cls: "text-zinc-400" },
  { text: "  Success: true", cls: "text-emerald-400" },
  { text: "  Risk score: 10/10 (critical)", cls: "text-red-400" },
]

export function TerminalAnimation() {
  const [shown, setShown] = useState(0)
  const [chars, setChars] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [shown, chars])

  useEffect(() => {
    if (shown >= LINES.length) {
      const t = setTimeout(() => {
        setShown(0)
        setChars(0)
      }, 4000)
      return () => clearTimeout(t)
    }

    const line = LINES[shown]

    if (chars < line.text.length) {
      const speed = line.text.startsWith("$") ? 45 : 16
      const t = setTimeout(() => setChars((c) => c + 1), speed)
      return () => clearTimeout(t)
    }

    const pause = line.text.startsWith("$")
      ? 320
      : line.text === ""
        ? 60
        : line.text.startsWith("  ✓")
          ? 80
          : 100

    const t = setTimeout(() => {
      setShown((s) => s + 1)
      setChars(0)
    }, pause)
    return () => clearTimeout(t)
  }, [shown, chars])

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/8 bg-zinc-950 border border-white/8 h-full min-h-[400px] max-h-[500px] flex flex-col">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900/90 border-b border-white/8">
        <span className="w-3 h-3 rounded-full bg-red-500/90" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
        <span className="w-3 h-3 rounded-full bg-green-500/90" />
        <span className="ml-3 text-xs text-zinc-500 font-mono tracking-wide select-none">
          shiro run
        </span>
        <span className="ml-auto text-xs text-zinc-600 font-mono">zsh</span>
      </div>
      {/* Body */}
      <div
        ref={containerRef}
        className="p-5 font-mono text-xs flex-1 overflow-y-auto"
      >
        {LINES.slice(0, shown).map((line, i) => (
          <div
            key={i}
            className={`leading-[1.65] ${line.cls || "text-zinc-700"}`}
          >
            {line.text || "\u00a0"}
          </div>
        ))}
        {shown < LINES.length && (
          <div
            className={`leading-[1.65] ${LINES[shown].cls || "text-zinc-700"}`}
          >
            {LINES[shown].text.slice(0, chars)}
            {LINES[shown].text.length > 0 && (
              <span className="inline-block w-[6px] h-[13px] bg-current align-middle ml-px opacity-90 animate-pulse" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
