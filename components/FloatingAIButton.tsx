"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingAIButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="/ai-prompts">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <span className="text-base">🤖</span>
          <span>AI Prompt</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
