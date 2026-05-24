"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started - Shiro Automation",
  description: "Quick start guide for Shiro Automation. Install, initialize, configure AI provider, and run your first AI-native CI/CD workflow in minutes.",
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const installSteps = [
  { n: "1", label: "Install", desc: "One-line curl install — no package manager needed", dot: "bg-sky-500" },
  { n: "2", label: "Initialize", desc: "Run shiro init to scaffold your project", dot: "bg-blue-500" },
  { n: "3", label: "Configure", desc: "Set your AI provider in config.yaml", dot: "bg-cyan-500" },
  { n: "4", label: "Run", desc: "shiro run — your first workflow is live", dot: "bg-teal-500" },
];

const nextSteps = [
  { icon: "🏗️", title: "Explore Architecture", desc: "Understand how Shiro orchestrates workflows", href: "/architecture" },
  { icon: "🧩", title: "Browse Modules", desc: "Discover community modules to extend functionality", href: "/modules" },
  { icon: "📋", title: "View Examples", desc: "Check out workflow examples for common use cases", href: "/examples" },
  { icon: "🗺️", title: "See Roadmap", desc: "What's coming next in Shiro's development", href: "/roadmap" },
];

export default function GettingStartedPage() {
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
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">Quick Start</Badge>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-text">Getting Started</h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Get up and running with Shiro in minutes. No complex configuration required.
          </motion.p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative pl-12">
          <motion.div
            className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-sky-400 via-blue-500 to-teal-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            style={{ originY: 0 }}
          />
          {installSteps.map((step, i) => (
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

        <Separator />

        {/* Installation */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Installation</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Tabs defaultValue="auto" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="auto">Auto-detect</TabsTrigger>
                <TabsTrigger value="download">Download</TabsTrigger>
                <TabsTrigger value="build">Build from Source</TabsTrigger>
                <TabsTrigger value="docker">Docker</TabsTrigger>
              </TabsList>

              <TabsContent value="auto" className="mt-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <CardTitle>Auto-detect Installation</CardTitle>
                        <CardDescription>Automatically detects your platform and installs the correct binary</CardDescription>
                      </div>
                      <Badge variant="secondary" className="ml-auto">Recommended</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>curl -sSL https://raw.githubusercontent.com/rajitk13/shiro-automation/master/scripts/install-auto.sh | bash</code>
                    </pre>
                    <p className="text-sm text-muted-foreground mt-4">
                      This script automatically detects your platform and installs the correct binary to <code className="bg-muted px-1 rounded">/usr/local/bin/shiro</code>.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="download" className="mt-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📦</span>
                      <div>
                        <CardTitle>Download Pre-built Binaries</CardTitle>
                        <CardDescription>Download the binary for your platform from GitHub releases</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Linux", cmd: "curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64" },
                      { label: "macOS (Intel)", cmd: "curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-darwin-amd64" },
                      { label: "macOS (Apple Silicon)", cmd: "curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-darwin-arm64" },
                      { label: "Windows", cmd: "curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-windows-amd64.exe" },
                    ].map((p) => (
                      <div key={p.label}>
                        <h4 className="font-semibold mb-1.5 text-sm">{p.label}</h4>
                        <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-xs"><code>{p.cmd}</code></pre>
                      </div>
                    ))}
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">After downloading, make it executable and add to PATH:</p>
                      <pre className="mt-2 text-xs"><code>chmod +x shiro-[platform] &amp;&amp; sudo mv shiro-[platform] /usr/local/bin/shiro</code></pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="build" className="mt-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔧</span>
                      <div>
                        <CardTitle>Build from Source</CardTitle>
                        <CardDescription>Build Shiro from source code — requires Go 1.21+</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>git clone https://github.com/rajitk13/shiro-automation.git
cd shiro-automation
go build -o shiro ./cmd/runtime
sudo mv shiro /usr/local/bin/shiro</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="docker" className="mt-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🐳</span>
                      <div>
                        <CardTitle>Docker</CardTitle>
                        <CardDescription>Use Shiro in a Docker container</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>docker pull ghcr.io/rajitk13/shiro-automation:latest
docker run --rm -v $(pwd):/workspace ghcr.io/rajitk13/shiro-automation:latest shiro run</code>
                    </pre>
                    <p className="text-sm text-muted-foreground mt-4">
                      Mount your working directory to <code className="bg-muted px-1 rounded">/workspace</code> to access your workflows.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeUp>
        </section>

        <Separator />

        {/* Initialize & Run */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Initialize &amp; Run</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            <StaggerItem>
              <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <CardTitle>Initialize Project</CardTitle>
                      <CardDescription>Create a new Shiro project in seconds</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>cd your-project
shiro init</code>
                  </pre>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Creates:</p>
                    <pre className="text-xs font-mono whitespace-pre"><code>{`.shiro/
├── workflow.json
├── config.yaml
├── modules/
│   └── registry.yaml
└── workflows/`}</code></pre>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">▶️</span>
                    <div>
                      <CardTitle>Run Workflows</CardTitle>
                      <CardDescription>Execute with auto-detection</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>shiro run</code></pre>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Other commands:</p>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                      <code>{`# Specific workflow
shiro run -workflow examples/simple-test.json

# Custom config
shiro run -config configs/models.yaml

# Custom .shiro dir
shiro run -shiro-dir /path/to/.shiro`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerGroup>
        </section>

        <Separator />

        {/* Module Management */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Module Management</h2>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧩</span>
                  <div>
                    <CardTitle>Add and Manage Modules</CardTitle>
                    <CardDescription>Extend Shiro with community modules</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`# Add a module (auto-discovers from GitHub)
shiro add module jira

# Add module from GitHub URL
shiro add module github.com/user/custom-module

# Search for modules
shiro search module slack

# List installed
shiro list modules

# Remove a module
shiro remove module jira`}</code>
                </pre>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 text-sm flex flex-wrap items-center gap-1">
                  <strong>Tip:</strong>
                  <span>Visit the <Link href="/modules" className="text-primary underline">Modules</Link> page to discover community modules tagged with</span>
                  <Badge className="ml-1">shiro-automation-module</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

        <Separator />

        {/* GitLab CI */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">GitLab CI Integration</h2>
            <Card className="border-border/60">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🦊</span>
                  <div>
                    <CardTitle>Integrate with GitLab CI/CD</CardTitle>
                    <CardDescription>Use Shiro in your GitLab pipelines</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{`stages:
  - review

ai-review:
  stage: review
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
    - chmod +x shiro-linux-amd64
    - mv shiro-linux-amd64 /usr/local/bin/shiro
  script:
    - shiro run
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  See the <Link href="/examples" className="text-primary underline">Examples</Link> page for more GitLab CI configurations.
                </p>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

        <Separator />

        {/* Next Steps */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {nextSteps.map((item) => (
              <StaggerItem key={item.title}>
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

      </div>
    </div>
  );
}
