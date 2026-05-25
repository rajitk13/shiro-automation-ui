"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GitHubRelease } from "@/lib/github-api";

interface ReleaseAssetsModalProps {
  release: GitHubRelease | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ReleaseAssetsModal({ release, isOpen, onClose }: ReleaseAssetsModalProps) {
  if (!release) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-10 z-50 bg-background border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border/60">
              <div>
                <h2 className="text-2xl font-bold">{release.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">Release Assets</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {release.assets && release.assets.length > 0 ? (
                <div className="space-y-3">
                  {release.assets.map((asset) => (
                    <a
                      key={asset.name}
                      href={asset.browser_download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{asset.name}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground ml-4">
                        {(asset.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No assets found for this release
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
