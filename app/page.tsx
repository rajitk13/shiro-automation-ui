import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp, FadeIn, StaggerGroup, StaggerItem, GlowCard } from "@/components/Animate";
import { TerminalAnimation } from "@/components/TerminalAnimation";

const features = [
  { icon: "⚡", title: "CI-Native Execution", desc: "Runs inside your existing GitLab CI, GitHub Actions, Jenkins, or Kubernetes. No new infrastructure, no always-on orchestration servers." },
  { icon: "🤖", title: "AI-Native Workflows", desc: "Built for AI from day one. PR reviews, release notes, incident summarization, Jira automation — all with your AI providers." },
  { icon: "🔒", title: "Enterprise Governance", desc: "Human-in-loop approvals, audit trails, and state persistence. Built for teams that need control, not chaos." },
  { icon: "�", title: "Single Binary", desc: "One 10MB Go binary. No JVM, no dependencies, no container orchestration. Works where you already have a runner." },
  { icon: "🧩", title: "Module System", desc: "Reusable workflows and integrations from the community. Install Jira, Slack, or custom modules in one command." },
  { icon: "�", title: "DAG Execution", desc: "Intelligent dependency resolution with automatic parallelism. Ephemeral execution — no long-running state machines." },
];

const stats = [
  { value: "<100ms", label: "Startup time" },
  { value: "~10MB", label: "Binary size" },
  { value: "0", label: "Dependencies" },
  { value: "∞", label: "Scalability" },
];

export const metadata: Metadata = {
  title: "Shiro - AI-Native Workflow Orchestration for CI/CD",
  description: "The portable AI orchestration runtime that runs inside your existing CI. AI PR reviews, deployment approvals, release notes — no new infrastructure required.",
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: text */}
            <div>
              <FadeIn delay={0.05}>
                <Badge className="mb-6 px-4 py-1.5 text-sm font-medium">
                  🚀 AI-Native Workflow Orchestration
                </Badge>
              </FadeIn>
              <FadeUp delay={0.15}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
                  <span className="gradient-text">AI workflows</span>
                  <br />
                  <span className="text-foreground/80 text-2xl sm:text-4xl md:text-5xl font-semibold mt-2 block">
                    inside your CI
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
                  The portable orchestration runtime that runs inside your existing GitLab CI, GitHub Actions, Jenkins, or Kubernetes.
                  <strong className="text-foreground">No new infrastructure. No always-on servers.</strong> Just a single Go binary.
                </p>
              </FadeUp>
              <FadeUp delay={0.35}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="px-8 h-12 text-base shadow-lg shadow-primary/25" asChild>
                    <Link href="/getting-started">Start automating →</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 h-12 text-base" asChild>
                    <a href="https://github.com/rajitk13/shiro-automation" target="_blank" rel="noopener noreferrer">
                      ⭐ Star on GitHub
                    </a>
                  </Button>
                </div>
              </FadeUp>
              <FadeUp delay={0.42}>
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-muted/50 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>curl -sSL .../install.sh | bash</span>
                </div>
              </FadeUp>
            </div>

            {/* Right: live terminal */}
            <FadeUp delay={0.2}>
              <TerminalAnimation />
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Stats */}
      <FadeIn delay={0.1}>
        <section className="py-12 px-6 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Features */}
      <section className="py-16 sm:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why teams choose Shiro</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Shiro is <strong className="text-foreground">not another CI platform</strong> — it's the AI orchestration layer that runs inside your existing infrastructure. No SaaS, no lock-in, no orchestration clusters.
              </p>
            </div>
          </FadeUp>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <GlowCard>
                  <Card className="glow-card h-full border-border/60 bg-card/70 glass-card">
                    <CardHeader>
                      <div className="text-3xl mb-3">{icon}</div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 sm:py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for modern infrastructure teams</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Shiro is designed for teams who need AI automation without the operational overhead of dedicated orchestration infrastructure.
              </p>
            </div>
          </FadeUp>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏗️", title: "Platform Engineers", desc: "Build internal developer platforms with AI workflows that run in your existing CI." },
              { icon: "🚀", title: "DevOps Teams", desc: "Automate deployments, approvals, and release notes without new infrastructure." },
              { icon: "🤖", title: "AI Engineering", desc: "Ship AI-powered workflows with governance and human-in-loop controls." },
              { icon: "🔒", title: "Enterprise Teams", desc: "Self-hosted, audit-ready automation that runs inside your infrastructure." },
            ].map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="border-border/60 bg-card/70 h-full">
                  <CardHeader>
                    <div className="text-3xl mb-3">{icon}</div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{desc}</CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Not just another CI tool</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Shiro fills the gap between CI platforms and AI orchestration — without the complexity of dedicated infrastructure.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "vs Jenkins/GitLab CI",
                items: [
                  "AI-native workflows built-in",
                  "Human-in-loop approvals with state persistence",
                  "Portable across CI platforms",
                  "No pipeline YAML complexity",
                ],
              },
              {
                title: "vs Temporal/n8n",
                items: [
                  "Runs inside your existing CI (no new servers)",
                  "Single binary, no orchestration cluster",
                  "Ephemeral execution (no long-running state machines)",
                  "Zero operational overhead",
                ],
              },
              {
                title: "vs LangChain",
                items: [
                  "Built for CI/CD workflows, not just AI chains",
                  "Enterprise governance and approvals",
                  "Native GitLab/GitHub integration",
                  "Production-ready error handling",
                ],
              },
            ].map(({ title, items }) => (
              <FadeUp key={title} delay={0.1}>
                <Card className="border-border/60 bg-card/70 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg mb-4">{title}</CardTitle>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="text-primary mt-0.5">✓</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Code snippet section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <Badge variant="secondary" className="mb-4">Developer-first</Badge>
                <h2 className="text-4xl font-bold mb-5">Ship AI workflows in minutes, not months</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  No complex orchestration clusters. No YAML hell. Just define your workflow, run it locally, and ship it to CI.
                </p>
                <ul className="space-y-3">
                  {["Local development: shiro run workflow.json", "GitLab CI: one line with Docker image", "GitHub Actions: container-based execution", "State persistence across CI runs"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/getting-started">See the quick start →</Link>
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/40">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-2">
                  <div><span className="text-primary">$</span> <span className="text-foreground">shiro init</span></div>
                  <div className="text-muted-foreground text-xs">✓ Created .shiro/workflow.json</div>
                  <div className="text-muted-foreground text-xs">✓ Created .shiro/config.yaml</div>
                  <div className="mt-3"><span className="text-primary">$</span> <span className="text-foreground">shiro add module ai.review</span></div>
                  <div className="text-muted-foreground text-xs">✓ Fetching from github.com...</div>
                  <div className="text-muted-foreground text-xs">✓ Module installed</div>
                  <div className="mt-3"><span className="text-primary">$</span> <span className="text-foreground">shiro run</span></div>
                  <div className="text-green-400 text-xs">✓ All steps completed in 87ms</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-6">
        <FadeUp>
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">Ready to ship AI workflows?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                Join platform engineers and DevOps teams automating with Shiro. Open source, Apache 2.0 licensed, production-ready.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <Button size="lg" className="px-8 shadow-lg shadow-primary/25" asChild>
                  <Link href="/getting-started">Get started →</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/rajitk13/shiro-automation" target="_blank" rel="noopener noreferrer">
                    ⭐ Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
