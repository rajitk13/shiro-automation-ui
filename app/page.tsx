"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FadeUp,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  GlowCard,
  AnimatePresence,
  motion,
} from "@/components/Animate"
import { TerminalAnimation } from "@/components/TerminalAnimation"
import { Dialog } from "@/components/ui/dialog"
import { useState, useEffect } from "react"

const heroVariations = [
  {
    headline: "Replace Deployment Checklists",
    subheadline: "With A Single Workflow",
    description:
      "Drop one Docker image into your pipeline. Get AI code review, deployment approvals, and Slack notifications — without new infrastructure or dedicated agents.",
  },
  {
    headline: "Stop Running Deployment Scripts",
    subheadline: "By Hand",
    description:
      "Automate your entire CI/CD pipeline with AI-powered workflows. Code review, approvals, and notifications — all in one Docker image.",
  },
  {
    headline: "Turn Your CI Runner",
    subheadline: "Into An AI Engine",
    description:
      "Add AI code review, human-in-loop approvals, and Slack notifications to GitLab CI or GitHub Actions. No new servers, no agents.",
  },
  {
    headline: "Eliminate Manual Deployment",
    subheadline: "Checklists Forever",
    description:
      "One Docker image. AI-powered code review, deployment approvals, and team notifications. Works in your existing CI pipeline.",
  },
  {
    headline: "Ship Faster With AI",
    subheadline: "Workflows In Your CI",
    description:
      "Automate code review, approvals, and Slack notifications without new infrastructure. Drop one Docker image into GitLab CI or GitHub Actions.",
  },
]

const features = [
  {
    icon: "⚡",
    title: "Turn your CI runner into an AI workflow engine",
    desc: "Runs as a Docker image inside GitLab CI or GitHub Actions. No new servers, no agents, no infra to manage.",
  },
  {
    icon: "🤖",
    title:
      "AI reviews, approvals, and deployments running in your existing CI/CD",
    desc: "AI code review, release notes, incident summaries — powered by OpenAI, Ollama, or any custom endpoint.",
  },
  {
    icon: "🔒",
    title: "Need manager approval before production deploy? Add one step",
    desc: "Pause a workflow mid-pipeline, send a Slack notification, and resume on manual GitLab job trigger.",
  },
  {
    icon: "📦",
    title: "Single Binary",
    desc: "One 10MB Go binary. No JVM, no runtime dependencies. Works inside any CI runner that has Docker.",
  },
  {
    icon: "🧩",
    title: "Module System",
    desc: "Install Slack, Jira, git, AI modules with one command. Community modules on GitHub.",
  },
  {
    icon: "💾",
    title: "State Persistence",
    desc: "Save workflow state to GitLab artifacts between pipeline stages. Resume exactly where you left off.",
  },
]

const workflows = [
  {
    icon: "🔍",
    title: "AI PR / MR Review",
    desc: "Posts an AI-generated code review comment on every merge request.",
  },
  {
    icon: "✅",
    title: "Deployment Approval",
    desc: "Slack notification + human gate before production deploys.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Notify your team on every push to main via Slack.",
  },
  {
    icon: "📝",
    title: "Release Notes",
    desc: "Auto-generate release notes from commits using AI.",
  },
  {
    icon: "🐛",
    title: "Jira Automation",
    desc: "Create or update Jira issues from CI events automatically.",
  },
  {
    icon: "📊",
    title: "Incident Summaries",
    desc: "Summarize failures and alert the right team instantly.",
  },
]

const stats = [
  { value: "<100ms", label: "Startup time" },
  { value: "~10MB", label: "Binary size" },
  { value: "0", label: "New infra needed" },
  { value: "2", label: "CI platforms" },
]

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [currentVariation, setCurrentVariation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariation((prev) => (prev + 1) % heroVariations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const variation = heroVariations[currentVariation]

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
            {/* Left: text */}
            <div>
              <FadeIn delay={0.05}>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">
                    GitLab CI
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    GitHub Actions
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Jenkins
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Any Runner
                  </Badge>
                </div>
              </FadeIn>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVariation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[200px] sm:min-h-[220px]"
                >
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
                    <span className="gradient-text">{variation.headline}</span>
                    <br />
                    <span className="text-foreground/80 text-2xl sm:text-4xl md:text-5xl font-semibold mt-2 block">
                      {variation.subheadline}
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
                    {variation.description}
                  </p>
                </motion.div>
              </AnimatePresence>
              <FadeUp delay={0.35}>
                <div className="flex flex-col sm:flex-wrap gap-4 mb-8">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 h-12 text-base shadow-lg shadow-primary/25"
                    asChild
                  >
                    <Link href="/getting-started">Start automating →</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 h-12 text-base"
                    disabled
                  >
                    ▶ View Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 h-12 text-base"
                    asChild
                  >
                    <a
                      href="https://github.com/rajitk13/shiro-automation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ⭐ Star on GitHub
                    </a>
                  </Button>
                </div>
              </FadeUp>
              <FadeUp delay={0.42}>
                <div className="rounded-lg border border-border/60 bg-zinc-100 dark:bg-zinc-900 font-mono text-xs text-zinc-800 dark:text-white">
                  <div className="px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 text-[10px] border-b border-zinc-300 dark:border-white/5">
                    .gitlab-ci.yml
                  </div>
                  <div className="p-3 space-y-0.5">
                    <div className="text-sky-600 dark:text-sky-400">
                      ai-review:
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-300 break-all">
                      &nbsp;&nbsp;image:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">
                        ghcr.io/rajitk13/shiro-automation:latest
                      </span>
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-300">
                      &nbsp;&nbsp;script:
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-300 break-all">
                      &nbsp;&nbsp;&nbsp;&nbsp;-{" "}
                      <span className="text-amber-600 dark:text-amber-300">
                        shiro run -workflow .shiro/workflows/code-review.json
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right: live terminal — hidden on mobile to keep hero clean */}
            <FadeUp delay={0.2} className="hidden lg:block">
              <TerminalAnimation />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <FadeIn delay={0.1}>
        <section className="py-12 px-4 sm:px-6 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why teams choose Shiro
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Shiro is{" "}
                <strong className="text-foreground">
                  not another CI platform
                </strong>{" "}
                — it&apos;s the AI orchestration layer that runs inside your
                existing infrastructure. No SaaS, no lock-in, no orchestration
                clusters.
              </p>
            </div>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <GlowCard>
                  <Card className="glow-card h-full border-border/60 bg-card/70 glass-card">
                    <CardHeader>
                      <div className="text-3xl mb-3">{icon}</div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Built for modern infrastructure teams
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Shiro is designed for teams who need AI automation without the
                operational overhead of dedicated orchestration infrastructure.
              </p>
            </div>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🏗️",
                title: "Platform Engineers",
                desc: "Build internal developer platforms with AI workflows that run in your existing CI.",
              },
              {
                icon: "🚀",
                title: "DevOps Teams",
                desc: "Stop maintaining deployment checklists. Automate everything with workflows.",
              },
              {
                icon: "🤖",
                title: "AI Engineering",
                desc: "Ship AI-powered workflows with governance and human-in-loop controls.",
              },
              {
                icon: "🔒",
                title: "Enterprise Teams",
                desc: "Production deployment governance without another platform.",
              },
            ].map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="border-border/60 bg-card/70 h-full">
                  <CardHeader>
                    <div className="text-3xl mb-3">{icon}</div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Not just another CI tool
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Shiro fills the gap between CI platforms and AI orchestration —
                without the complexity of dedicated infrastructure.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm"
                        >
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

      {/* CI Quick-start */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <FadeUp>
              <div>
                <Badge variant="secondary" className="mb-4">
                  3 lines. That&apos;s it.
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-bold mb-5">
                  In your pipeline in minutes
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  No install step. No binary download. Use the Docker image
                  directly in your GitLab CI or GitHub Actions job.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Works in any GitLab CI runner",
                    "Works in any GitHub Actions runner",
                    "State saved to artifacts between stages",
                    "Full docs at shiro-docs.rajit.cc",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild>
                    <a
                      href="https://shiro-docs.rajit.cc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read the docs →
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/examples">View examples</Link>
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-4">
                <div className="rounded-xl border border-border/60 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl max-w-full text-zinc-800 dark:text-white">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-200 dark:bg-zinc-800/60 border-b border-zinc-300 dark:border-white/5">
                    <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">
                      🦊 .gitlab-ci.yml
                    </span>
                  </div>
                  <pre className="p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap break-all">{`ai-review:
  image: ghcr.io/rajitk13/shiro-automation:latest
  variables:
    GITLAB_TOKEN: $GL_TOKEN
  script:
    - shiro run -workflow .shiro/workflows/code-review.json \\
        -config .shiro/config.yaml -state-store gitlab
  only:
    - merge_requests`}</pre>
                </div>
                <div className="rounded-xl border border-border/60 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-xl max-w-full text-zinc-800 dark:text-white">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-200 dark:bg-zinc-800/60 border-b border-zinc-300 dark:border-white/5">
                    <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">
                      🐙 .github/workflows/review.yml
                    </span>
                  </div>
                  <pre className="p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap break-all">{`ai-review:
  runs-on: ubuntu-latest
  container:
    image: ghcr.io/rajitk13/shiro-automation:latest
  steps:
    - uses: actions/checkout@v4
    - run: shiro run -workflow .shiro/workflows/code-review.json`}</pre>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                What you can automate
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Pre-built workflow examples for the most common CI automation
                needs.
              </p>
            </div>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflows.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="border-border/60 bg-card/70 h-full">
                  <CardHeader>
                    <div className="text-2xl mb-2">{icon}</div>
                    <CardTitle className="text-base">{title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeUp>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/examples">
                  See all examples with copy-paste CI configs →
                </Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <FadeUp>
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">
                Add AI to your CI today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                One Docker image. Works in GitLab CI and GitHub Actions. Open
                source, Apache 2.0.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <Button
                  size="lg"
                  className="px-8 shadow-lg shadow-primary/25"
                  asChild
                >
                  <a
                    href="https://shiro-docs.rajit.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the docs →
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/rajitk13/shiro-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⭐ Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Demo Dialog */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Shiro Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Dialog>
    </div>
  )
}
