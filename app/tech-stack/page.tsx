"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const goReasons = [
  { icon: "⚡", title: "Blazing Fast", desc: "Compiled binary executes workflows in milliseconds. Zero interpreter overhead, no JVM, no startup delay." },
  { icon: "📦", title: "Single Binary", desc: "Compile to a static binary with zero dependencies. Drop it anywhere — CI runner, container, or bare metal." },
  { icon: "🔀", title: "Built-in Concurrency", desc: "Goroutines and channels enable efficient parallel DAG execution without complex threading primitives." },
  { icon: "🌍", title: "Cross-Platform", desc: "One codebase compiles for Linux, macOS, Windows — AMD64 and ARM64. No environment-specific builds." },
];

const moduleTypes = [
  { icon: "📦", title: "Built-in Modules", badge: "Zero deps", desc: "Core functionality compiled into the binary: print, slack.notify, git.diff, ai.generate — always available." },
  { icon: "🔌", title: "Subprocess Modules", badge: "Extensible", desc: "External programs communicating via JSON over stdin/stdout. Binary mode or go-run mode." },
  { icon: "🌐", title: "HTTP Modules", badge: "Distributed", desc: "RESTful API endpoints with load balancing, health checks, and circuit breakers." },
  { icon: "🐙", title: "GitHub Integration", badge: "Marketplace", desc: "Auto-discover and install modules from GitHub repositories tagged shiro-automation-module." },
];

const aiProviders = [
  { icon: "🧠", title: "Ollama", badge: "Local / Private", desc: "Run Llama, Mistral, and more on your own hardware. Full privacy, zero cloud dependency." },
  { icon: "✨", title: "OpenAI", badge: "GPT-4 / GPT-4o", desc: "Production-grade AI with enterprise reliability. GPT-4 and latest OpenAI models supported." },
  { icon: "🔧", title: "Custom Endpoint", badge: "Bring your own", desc: "Any OpenAI-compatible API: vLLM, LM Studio, custom deployments — same config syntax." },
];

const ciPlatforms = [
  { icon: "🦊", title: "GitLab CI", badge: "Recommended", desc: "Native artifact state storage, human-in-loop approvals via manual jobs, and pipeline resumption." },
  { icon: "🐙", title: "GitHub Actions", badge: "Supported", desc: "Full integration for PR reviews, push notifications, and workflow automation." },
  { icon: "🛠️", title: "Jenkins", badge: "Supported", desc: "Compatible as a build step or shell command in any Jenkinsfile pipeline." },
  { icon: "☁️", title: "Kubernetes Jobs", badge: "Cloud-native", desc: "Run as K8s Jobs for cloud-native CI/CD with container isolation and horizontal scalability." },
];

const stateBackends = [
  { icon: "🗂️", title: "GitLab Artifacts", badge: "CI default", desc: "Automatically uploads workflow state to GitLab CI artifacts. Downloaded between stages — no external infra." },
  { icon: "💾", title: "Filesystem", badge: "Local dev", desc: "Stores state in the local filesystem. Simple and reliable for local development and testing." },
  { icon: "⚡", title: "Memory", badge: "Fastest", desc: "In-memory storage for ephemeral workflows. Maximum speed, zero persistence." },
];

export default function TechStackPage() {
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
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">Under the Hood</Badge>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">Tech Stack</h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Understanding the technology behind Shiro&apos;s performance and capabilities.
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-8 rounded-2xl border border-border/60 bg-muted/20"
        >
          {[
            { value: "<100ms", label: "Startup time" },
            { value: "~10MB",  label: "Binary size" },
            { value: "0",      label: "Dependencies" },
            { value: "3+",     label: "AI providers" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        <Separator />

        {/* Why Go */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">Why GoLang?</h2>
            <p className="text-muted-foreground mb-8">Go&apos;s compiled nature enables Shiro to process complex DAG workflows in under 100ms.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {goReasons.map((r) => (
              <StaggerItem key={r.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.icon}</span>
                      <CardTitle className="text-lg">{r.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* Module System */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">Module System Architecture</h2>
            <p className="text-muted-foreground mb-8">Four module types give you zero-dependency built-ins and unlimited extensibility.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {moduleTypes.map((m) => (
              <StaggerItem key={m.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{m.icon}</span>
                        <CardTitle className="text-lg">{m.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="shrink-0">{m.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* AI Providers */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">AI Provider Support</h2>
            <p className="text-muted-foreground mb-8">First-class support for multiple AI providers — local or cloud.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-3 gap-5">
            {aiProviders.map((p) => (
              <StaggerItem key={p.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.icon}</span>
                        <CardTitle className="text-lg">{p.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-xs">{p.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeUp delay={0.2}>
            <div className="mt-6 bg-primary/10 p-4 rounded-xl border border-primary/20 text-sm">
              <strong>Secure config:</strong>{" "}
              <span className="text-muted-foreground">Use </span>
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{'{env.API_KEY}'}</code>
              <span className="text-muted-foreground"> syntax — API keys never hardcoded in workflow files.</span>
            </div>
          </FadeUp>
        </section>

        <Separator />

        {/* CI Platforms */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">CI Platform Integration</h2>
            <p className="text-muted-foreground mb-8">Runs inside your existing runners — no new infrastructure required.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {ciPlatforms.map((c) => (
              <StaggerItem key={c.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.icon}</span>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="shrink-0">{c.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* State Storage */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">State Storage Backends</h2>
            <p className="text-muted-foreground mb-8">Pluggable state backends — from CI-native artifacts to in-memory ephemeral storage.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-3 gap-5">
            {stateBackends.map((s) => (
              <StaggerItem key={s.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{s.icon}</span>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-xs">{s.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
