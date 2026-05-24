"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap - Shiro Automation Future Plans",
  description: "Shiro Automation roadmap: Visual workflow builder, enhanced module registry, additional CI platforms, advanced AI features, and enterprise capabilities coming soon.",
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const currentFeatures = [
  { icon: "⚡", title: "Core Runtime", items: ["DAG-based workflow execution", "Built-in modules (print, slack, git, AI)", "Subprocess module support", "Variable resolution", "State storage backends"] },
  { icon: "🦊", title: "CI Integration", items: ["GitLab CI native support", "GitHub Actions integration", "Human-in-loop approvals", "Manual job resumption", "Artifact-based state storage"] },
  { icon: "🤖", title: "AI Capabilities", items: ["Ollama local models", "OpenAI integration", "Custom OpenAI-compatible endpoints", "Environment variable resolution"] },
  { icon: "🛠️", title: "Developer Experience", items: ["Simplified CLI commands", "Auto-detection of configs", "Module auto-discovery", "GitHub marketplace integration"] },
];

const planned = [
  { icon: "🎨", title: "Visual Workflow Builder", badge: "Future", badgeVariant: "secondary" as const, desc: "Drag-and-drop node-based editor with real-time validation, visual DAG representation, and export/import of workflow.json.", dot: "bg-slate-400" },
  { icon: "📦", title: "Enhanced Module Registry", badge: "In Progress", badgeVariant: "default" as const, desc: "Centralized registry with module ratings, version management, security scanning, and dependency resolution.", dot: "bg-primary" },
  { icon: "🔀", title: "Additional CI Platforms", badge: "Planned", badgeVariant: "outline" as const, desc: "CircleCI, Azure Pipelines, Bitbucket Pipelines, AWS CodeBuild, and Google Cloud Build support.", dot: "bg-slate-400" },
  { icon: "🤖", title: "Advanced AI Features", badge: "Planned", badgeVariant: "outline" as const, desc: "Multi-step AI chains, natural language to workflow conversion, AI-powered debugging and suggestions.", dot: "bg-slate-400" },
  { icon: "🏢", title: "Enterprise Features", badge: "Planned", badgeVariant: "outline" as const, desc: "RBAC and permissions, audit logging, SSO integration, self-hosted module registry, enterprise support plans.", dot: "bg-slate-400" },
];

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
      <div className="space-y-20">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-5"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">What&apos;s Next</Badge>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">Roadmap</h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Future plans and development roadmap for Shiro Automation.
          </motion.p>
        </motion.div>

        {/* Current Features */}
        <section>
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Available Now</h2>
              <Badge className="text-sm">Stable</Badge>
            </div>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {currentFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{f.icon}</span>
                      <CardTitle className="text-lg">{f.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-emerald-500 text-xs">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* Planned Features — animated timeline */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Planned Features</h2>
          </FadeUp>
          <div className="relative pl-12">
            <motion.div
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-sky-500 to-slate-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
            {planned.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`absolute -left-12 z-10 w-8 h-8 rounded-full ${item.dot} flex items-center justify-center text-lg shadow-lg border-2 border-background`}>
                  {item.icon}
                </div>
                <Card className="border-border/60 hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant={item.badgeVariant} className="shrink-0">{item.badge}</Badge>
                    </div>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Community */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Community Contributions</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "🧩", title: "Build Modules", desc: "Create custom modules for your favorite tools. Add the shiro-automation-module topic to your GitHub repo to appear in the marketplace." },
              { icon: "🐛", title: "Report Issues", desc: "Found a bug or have a feature request? Open an issue on GitHub to help improve Shiro.", href: "https://github.com/rajitk13/shiro-automation/issues" },
              { icon: "🔀", title: "Submit PRs", desc: "Contribute code, documentation, or tests. All contributions that improve Shiro are welcome.", href: "https://github.com/rajitk13/shiro-automation/pulls" },
              { icon: "💬", title: "Start a Discussion", desc: "Share ideas, ask questions, or discuss Shiro's future with the community.", href: "https://github.com/rajitk13/shiro-automation/discussions" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    {item.href && (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-3 inline-block">
                        Open on GitHub →
                      </a>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

      </div>
    </div>
  );
}
