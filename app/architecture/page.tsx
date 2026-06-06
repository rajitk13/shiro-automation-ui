"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const dagLayers = [
  { icon: "⚡", label: "Trigger Adapters", desc: "GitLab · GitHub · Jenkins · Kubernetes", dot: "bg-sky-500" },
  { icon: "🧠", label: "Workflow Runtime", desc: "Go execution engine · State management", dot: "bg-blue-500" },
  { icon: "🔀", label: "DAG Executor", desc: "Topological sort · Parallel execution", dot: "bg-blue-600" },
  { icon: "🧩", label: "Module System", desc: "Built-in modules · Subprocess modules", dot: "bg-cyan-500" },
  { icon: "🚀", label: "Integrations", desc: "AI · Git · Slack · Jira · Custom", dot: "bg-teal-500" },
];

const stats = [
  { value: "5", label: "Pipeline Layers" },
  { value: "3", label: "Storage Backends" },
  { value: "∞", label: "Custom Modules" },
  { value: "<100ms", label: "Startup Time" },
];

const integrations = [
  "GitLab", "GitHub", "Slack", "Jira", "Kubernetes", "Jenkins",
  "OpenAI", "Ollama", "Gemini", "Custom APIs", "PagerDuty", "Linear", "Datadog",
];

const moduleCards = [
  {
    title: "Built-in Modules",
    icon: "📦",
    badge: "Zero dependency",
    items: [
      "print - Console output with log levels",
      "slack.notify - Slack notifications",
      "git.diff - Git operations",
      "ai.generate - AI content generation",
    ],
  },
  {
    title: "Subprocess Modules",
    icon: "🔌",
    badge: "Extensible",
    items: [
      "Binary mode: Pre-compiled from GitHub releases",
      "Go-run mode: Executed via go run",
      "Auto-detection based on module.yaml",
      "Example: Jira Data Center integration",
    ],
  },
];

const stateCards = [
  { title: "GitLab Artifacts", icon: "🗂️", badge: "CI native", desc: "Stores workflow state in GitLab CI artifacts. Automatically uploaded and downloaded between pipeline stages." },
  { title: "Filesystem", icon: "💾", badge: "Local dev", desc: "Stores state in local filesystem. Ideal for local development and testing workflows." },
  { title: "Memory", icon: "⚡", badge: "Fastest", desc: "In-memory state storage. Fastest option but state is lost after execution completes." },
];

export default function ArchitecturePage() {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">System Design</Badge>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight gradient-text">
            Architecture
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Understanding Shiro&apos;s modular architecture and how it orchestrates workflows efficiently.
          </motion.p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-center p-5 rounded-2xl border border-border/50 bg-muted/30 hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl font-bold text-primary tabular-nums">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations Ticker */}
        <div className="overflow-hidden border-y border-border/40 py-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest text-center mb-3">Integrations</p>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...integrations, ...integrations].map((name, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block flex-shrink-0" />
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated Pipeline Timeline */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-10">Orchestration Flow</h2>
          </FadeUp>
          <div className="relative pl-12">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-sky-400 via-blue-500 to-teal-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
            {dagLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                className="relative flex items-center gap-5 mb-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Dot on the line */}
                <div className={`absolute -left-12 z-10 w-8 h-8 rounded-full ${layer.dot} flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-background flex-shrink-0`}>
                  {i + 1}
                </div>
                <Card className="flex-1 border-border/60 hover:border-primary/40 transition-colors duration-200">
                  <CardContent className="flex items-center gap-4 py-4 px-5">
                    <span className="text-2xl flex-shrink-0">{layer.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{layer.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{layer.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Module System */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Module System</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {moduleCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{card.icon}</span>
                        <CardTitle className="text-xl">{card.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{card.badge}</Badge>
                    </div>
                    <CardDescription>
                      {card.title === "Built-in Modules"
                        ? "Compiled into the main binary for zero-dependency execution"
                        : "External programs communicating via JSON over stdin/stdout"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">›</span>
                          <span className="text-muted-foreground">{item}</span>
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

        {/* Subprocess Architecture */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">Subprocess Architecture</h2>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-xl">External Module Communication</CardTitle>
                <CardDescription>How Shiro communicates with subprocess modules</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="execution-modes">
                    <AccordionTrigger>Execution Modes</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-1">Binary Mode</h4>
                          <p className="text-sm text-muted-foreground">
                            Downloads pre-compiled binaries from GitHub releases. Fastest execution with no compilation overhead.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-1">Go-Run Mode</h4>
                          <p className="text-sm text-muted-foreground">
                            Executes modules via <code className="bg-muted px-1 rounded">go run</code> directly from GitHub repositories. Fallback when no binary is available.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="http-api">
                    <AccordionTrigger>HTTP API Contract</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        {[
                          { method: "POST", path: "/execute", desc: "Executes module with workflow step data" },
                          { method: "GET", path: "/metadata", desc: "Returns module metadata including input/output schemas" },
                          { method: "GET", path: "/health", desc: "Health check endpoint for load balancing" },
                        ].map((ep) => (
                          <div key={ep.path} className="flex items-start gap-3">
                            <Badge variant="outline" className="font-mono text-xs flex-shrink-0">{ep.method}</Badge>
                            <div>
                              <code className="text-xs font-mono text-primary">{ep.path}</code>
                              <p className="text-muted-foreground text-xs mt-0.5">{ep.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="load-balancing">
                    <AccordionTrigger>Load Balancing</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[
                          "Round-robin load balancing across endpoints",
                          "Health check-based endpoint removal",
                          "Circuit breaker pattern for failed endpoints",
                          "Retry logic with automatic failover",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">›</span>{item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

        <Separator />

        {/* State Storage */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">State Storage Backends</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {stateCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <span className="text-3xl mb-1">{card.icon}</span>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">{card.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* Custom Modules */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">Native Modules Support</h2>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-xl">Creating Custom Modules</CardTitle>
                <CardDescription>Extend Shiro with your own integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Shiro supports a decentralized module architecture that enables external contributors to create custom modules for SaaS applications without modifying the core codebase.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Module Template Structure</p>
                    <pre className="text-xs font-mono overflow-x-auto leading-relaxed">
{`your-module/
├── main.go           # Module implementation
├── config.yaml       # Module configuration
├── module.yaml       # Shiro metadata
└── README.md         # Documentation`}
                    </pre>
                  </div>
                  <p className="text-muted-foreground">
                    Modules can be distributed via GitHub or a community registry. Add the <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">shiro-automation-module</code> topic to your repo to appear in the community list.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

      </div>
    </div>
  );
}
