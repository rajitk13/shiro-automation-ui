"use client";

import { useState, useEffect } from "react";

const LINES = [
  { text: "$ shiro run mr-review.json",        cls: "text-primary" },
  { text: "  ◉ Loading workflow...",            cls: "text-zinc-400" },
  { text: "  ✓ Trigger: gitlab.merge_request",  cls: "text-zinc-400" },
  { text: "",                                   cls: "" },
  { text: "  Step 1/4: ai.generate",            cls: "text-zinc-400" },
  { text: "  ↳ Analyzing diff (147 lines)...",  cls: "text-sky-400" },
  { text: "  ✓ Review comment generated",       cls: "text-emerald-400" },
  { text: "",                                   cls: "" },
  { text: "  Step 2/4: slack.notify",           cls: "text-zinc-400" },
  { text: "  ↳ Posted to #code-reviews",        cls: "text-sky-400" },
  { text: "  ✓ Notification sent",              cls: "text-emerald-400" },
  { text: "",                                   cls: "" },
  { text: "  Step 3/4: git.diff",               cls: "text-zinc-400" },
  { text: "  ✓ Diff captured",                  cls: "text-emerald-400" },
  { text: "",                                   cls: "" },
  { text: "  Step 4/4: jira.update",            cls: "text-zinc-400" },
  { text: "  ✓ Issue PROJ-42 updated",          cls: "text-emerald-400" },
  { text: "",                                   cls: "" },
  { text: "✓ All steps completed in 94ms",      cls: "text-emerald-300 font-semibold" },
];

export function TerminalAnimation() {
  const [shown, setShown] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (shown >= LINES.length) {
      const t = setTimeout(() => { setShown(0); setChars(0); }, 4000);
      return () => clearTimeout(t);
    }

    const line = LINES[shown];

    if (chars < line.text.length) {
      const speed = line.text.startsWith("$") ? 45 : 16;
      const t = setTimeout(() => setChars(c => c + 1), speed);
      return () => clearTimeout(t);
    }

    const pause =
      line.text.startsWith("$") ? 320 :
      line.text === "" ? 60 :
      line.text.startsWith("  ✓") ? 80 :
      100;

    const t = setTimeout(() => { setShown(s => s + 1); setChars(0); }, pause);
    return () => clearTimeout(t);
  }, [shown, chars]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/8 bg-zinc-950 border border-white/8">
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
      <div className="p-5 font-mono text-sm min-h-[340px]">
        {LINES.slice(0, shown).map((line, i) => (
          <div key={i} className={`leading-[1.65] ${line.cls || "text-zinc-700"}`}>
            {line.text || "\u00a0"}
          </div>
        ))}
        {shown < LINES.length && (
          <div className={`leading-[1.65] ${LINES[shown].cls || "text-zinc-700"}`}>
            {LINES[shown].text.slice(0, chars)}
            {LINES[shown].text.length > 0 && (
              <span className="inline-block w-[6px] h-[13px] bg-current align-middle ml-px opacity-90 animate-pulse" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
