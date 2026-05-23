import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp, FadeIn, StaggerGroup, StaggerItem, GlowCard } from "@/components/Animate";
import { TerminalAnimation } from "@/components/TerminalAnimation";

const features = [
  { icon: "⚡", title: "Zero Infrastructure", desc: "Runs inside your existing CI runners — GitLab, GitHub Actions, Jenkins, Kubernetes. No new servers, no SaaS, no lock-in." },
  { icon: "📦", title: "Single Binary", desc: "Drop one 10MB file anywhere. No dependencies, no JVM, no container orchestration. Works where you already have a runner." },
  { icon: "🤖", title: "AI-Native", desc: "First-class Ollama, OpenAI, and custom endpoint support. Intelligent automation baked in, not bolted on." },
  { icon: "🔀", title: "DAG Execution", desc: "Topological sorting with intelligent dependency resolution. Parallel execution when steps allow it." },
  { icon: "🧩", title: "Module System", desc: "Pluggable architecture with GitHub marketplace. Discover and install community modules in one command." },
  { icon: "🔁", title: "Human-in-Loop", desc: "Pause workflows and require manual approval via GitLab manual jobs. Resume exactly where you left off." },
];

const stats = [
  { value: "<100ms", label: "Startup time" },
  { value: "~10MB", label: "Binary size" },
  { value: "0", label: "Dependencies" },
  { value: "∞", label: "Scalability" },
];

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
                  🚀 AI-Native CI/CD Workflow Runtime
                </Badge>
              </FadeIn>
              <FadeUp delay={0.15}>
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
                  <span className="gradient-text">Shiro</span>
                  <br />
                  <span className="text-foreground/80 text-4xl md:text-5xl font-semibold mt-2 block">
                    Automation
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  A portable workflow orchestration runtime built with{" "}
                  <strong className="text-foreground">Go</strong> for blazing-fast CI/CD.
                  AI-native, module-driven, human-in-loop — ready for production.
                </p>
              </FadeUp>
              <FadeUp delay={0.35}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="px-8 h-12 text-base shadow-lg shadow-primary/25" asChild>
                    <Link href="/getting-started">Get Started →</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 h-12 text-base" asChild>
                    <a href="https://github.com/rajitk13/shiro-automation" target="_blank" rel="noopener noreferrer">
                      View on GitHub
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
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why to choose this</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Shiro is the only AI-native workflow runtime that runs inside your existing CI pipeline — no new infrastructure, no always-on servers, just a single binary.
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

      {/* Code snippet section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <Badge variant="secondary" className="mb-4">Simple by design</Badge>
                <h2 className="text-4xl font-bold mb-5">From zero to workflow in 60 seconds</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Initialize, configure, and run your first AI-powered CI workflow without reading a 100-page manual.
                </p>
                <ul className="space-y-3">
                  {["Auto-detects your project structure", "Environment variable-based secrets", "DAG with automatic parallelism", "Human approval gates built-in"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/getting-started">Read the guide →</Link>
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
      <section className="py-24 px-6">
        <FadeUp>
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
              <h2 className="text-4xl font-bold mb-4 relative z-10">Start automating today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                Production-ready in minutes. No credit card, no SaaS lock-in — just a Go binary.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <Button size="lg" className="px-8 shadow-lg shadow-primary/25" asChild>
                  <Link href="/getting-started">Start for free →</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/architecture">Explore architecture</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
