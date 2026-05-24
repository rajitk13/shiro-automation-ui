"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function FloatingAIButton() {
  const pathname = usePathname();
  const router = useRouter();
  const isAIPage = pathname === "/ai-prompts";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-2 bg-muted/80 backdrop-blur-sm rounded-full p-1.5 border border-border/60 shadow-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(isAIPage ? "/" : "/ai-prompts")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
            !isAIPage
              ? "bg-primary text-primary-foreground shadow-primary/30"
              : "text-foreground hover:bg-muted"
          }`}
        >
          <span>👤</span>
          <span>Human</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(isAIPage ? "/" : "/ai-prompts")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
            isAIPage
              ? "bg-primary text-primary-foreground shadow-primary/30"
              : "text-foreground hover:bg-muted"
          }`}
        >
          <span>🤖</span>
          <span>Agent</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
