"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function FloatingAIButton() {
  const pathname = usePathname();
  const router = useRouter();
  const isAIPage = pathname === "/ai-prompts";

  const handleHumanClick = () => {
    if (isAIPage) {
      router.push("/");
    }
  };

  const handleAgentClick = () => {
    if (!isAIPage) {
      router.push("/ai-prompts");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-24 right-6 z-50"
    >
      <div className="flex items-center gap-2 bg-background/40 backdrop-blur-lg rounded-full p-1 border border-border/40 shadow-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHumanClick}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
            !isAIPage
              ? "bg-primary text-primary-foreground shadow-primary/30"
              : "text-foreground hover:bg-background/60"
          }`}
        >
          <span>👤</span>
          <span className="hidden sm:inline">Human</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAgentClick}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
            isAIPage
              ? "bg-primary text-primary-foreground shadow-primary/30"
              : "text-foreground hover:bg-background/60"
          }`}
        >
          <span>🤖</span>
          <span className="hidden sm:inline">Agent</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
