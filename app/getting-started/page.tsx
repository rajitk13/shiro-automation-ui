"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const steps = [
  {
    n: "1",
    label: "Add the workflow file",
    desc: "Create .shiro/workflows/code-review.json in your repo",
    dot: "bg-sky-500",
  },
  {
    n: "2",
    label: "Add the config",
    desc: "Create .shiro/config.yaml with your AI provider settings",
    dot: "bg-blue-500",
  },
  {
    n: "3",
    label: "Add the CI job",
    desc: "Reference the Docker image in your .gitlab-ci.yml or GitHub Actions workflow",
    dot: "bg-indigo-500",
  },
];

const nextSteps = [
  { icon: "📚", title: "Full Documentation", desc: "In-depth guides, CLI reference, workflow schema, and API docs", href: "https://shiro-docs.rajit.cc", external: true },
  { icon: "📋", title: "View Examples", desc: "Copy-paste CI configs for common workflows", href: "/examples" },
  { icon: "🧩", title: "Browse Modules", desc: "Slack, Jira, git, AI and more community modules", href: "/modules" },
  { icon: "🗺️", title: "See Roadmap", desc: "What's coming next in Shiro", href: "/roadmap" },
];

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
      <div className="space-y-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-5"
        >
          <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">Quick Start</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Getting Started</h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Shiro runs inside your existing <strong className="text-foreground">GitLab CI</strong> or{" "}
            <strong className="text-foreground">GitHub Actions</strong> as a Docker image.
            No install step. No new infrastructure.
          </p>
          <div className="flex gap-3 justify-center flex-wrap pt-2">
            <Button size="lg" asChild>
              <a href="https://shiro-docs.rajit.cc" target="_blank" rel="noopener noreferrer">
                Full documentation →
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/examples">See CI examples</Link>
            </Button>
          </div>
        </motion.div>

        {/* 3-step summary */}
        <div className="relative pl-12">
          <motion.div
            className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            style={{ originY: 0 }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className="relative flex items-center gap-5 mb-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`absolute -left-12 z-10 w-8 h-8 rounded-full ${step.dot} flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-background`}>
                {step.n}
              </div>
              <Card className="flex-1 border-border/60 hover:border-primary/40 transition-colors duration-200">
                <CardContent className="py-4 px-5">
                  <div className="font-semibold text-sm">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{step.desc}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitLab CI snippet */}
        <FadeUp>
          <div>
            <h2 className="text-2xl font-bold mb-6">GitLab CI</h2>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🦊</span>
                  <div>
                    <CardTitle>Add to .gitlab-ci.yml</CardTitle>
                    <CardDescription>Use the Docker image — no install step needed</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                  <code>{`ai-review:
  stage: review
  image: ghcr.io/rajitk13/shiro-automation:latest
  variables:
    GITLAB_TOKEN: $GL_TOKEN
  script:
    - shiro run -workflow .shiro/workflows/code-review.json -config .shiro/config.yaml -state-store gitlab
  artifacts:
    paths:
      - .shiro/state/
    expire_in: 1 day
  only:
    - merge_requests`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  See the <Link href="/examples" className="text-primary underline">Examples</Link> page for more GitLab CI and GitHub Actions configurations.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeUp>

        {/* GitHub Actions snippet */}
        <FadeUp>
          <div>
            <h2 className="text-2xl font-bold mb-6">GitHub Actions</h2>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐙</span>
                  <div>
                    <CardTitle>Add to .github/workflows/review.yml</CardTitle>
                    <CardDescription>Container-based execution — same Docker image</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                  <code>{"name: AI PR Review\n\non:\n  pull_request:\n    types: [opened, synchronize, reopened]\n\njobs:\n  ai-review:\n    runs-on: ubuntu-latest\n    container:\n      image: ghcr.io/rajitk13/shiro-automation:latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Run AI Review\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n        run: shiro run -workflow .shiro/workflows/github-mr-review.json -config .shiro/config.yaml"}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  See the <Link href="/examples" className="text-primary underline">Examples</Link> page for more GitHub Actions configurations.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeUp>

        {/* Docs callout */}
        <FadeUp>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-2">Need more detail?</h2>
            <p className="text-muted-foreground mb-4">
              Workflow schema, config options, CLI reference, module docs, and advanced guides are all in the full documentation.
            </p>
            <Button asChild>
              <a href="https://shiro-docs.rajit.cc" target="_blank" rel="noopener noreferrer">
                Open documentation ↗
              </a>
            </Button>
          </div>
        </FadeUp>

        {/* Next Steps */}
        <section>
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Next Steps</h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((item) => (
              <StaggerItem key={item.title}>
                {"external" in item && item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{item.title} ↗</CardTitle>
                            <CardDescription>{item.desc}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </a>
                ) : (
                  <Link href={item.href}>
                    <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <CardDescription>{item.desc}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

      </div>
    </div>
  );
}
