"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const integrations = [
  { icon: "🦊", title: "GitLab CI", badge: "Recommended", desc: "Native artifact state storage, human-in-loop approvals via manual jobs, and pipeline resumption." },
  { icon: "🐙", title: "GitHub Actions", badge: "Supported", desc: "Full integration for PR reviews, push notifications, and workflow automation." },
  { icon: "🛠️", title: "Jenkins", badge: "Supported", desc: "Compatible as a build step or shell command in any Jenkinsfile pipeline." },
  { icon: "☁️", title: "Kubernetes Jobs", badge: "Supported", desc: "Run as K8s Jobs for cloud-native CI/CD with container isolation and horizontal scalability." },
  { icon: "🔀", title: "CircleCI", badge: "Planned", desc: "Full CircleCI integration with orb support and workflow orchestration." },
  { icon: "🔵", title: "Azure Pipelines", badge: "Planned", desc: "Azure DevOps integration for Azure-based CI/CD pipelines." },
  { icon: "🐳", title: "Bitbucket Pipelines", badge: "Planned", desc: "Atlassian Bitbucket Pipelines integration." },
  { icon: "🔶", title: "AWS CodeBuild", badge: "Planned", desc: "AWS CodeBuild integration for AWS-based workflows." },
  { icon: "☁️", title: "Google Cloud Build", badge: "Planned", desc: "Google Cloud Build integration for GCP workflows." },
];

const aiProviders = [
  { icon: "🧠", title: "Ollama", badge: "Local / Private", desc: "Run Llama, Mistral, and more on your own hardware. Full privacy, zero cloud dependency." },
  { icon: "✨", title: "OpenAI", badge: "GPT-4 / GPT-4o", desc: "Production-grade AI with enterprise reliability. GPT-4 and latest OpenAI models supported." },
  { icon: "🔧", title: "Custom Endpoint", badge: "Bring your own", desc: "Any OpenAI-compatible API: vLLM, LM Studio, custom deployments — same config syntax." },
];

export default function IntegrationsPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <div className="space-y-20">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-5"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">Integrations</Badge>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">Integrations</h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Connect Shiro with your existing CI/CD platforms and AI providers.
          </motion.p>
        </motion.div>

        {/* CI Platforms */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">CI/CD Platforms</h2>
            <p className="text-muted-foreground mb-8">Runs inside your existing runners — no new infrastructure required.</p>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-3 gap-5">
            {integrations.map((c) => (
              <StaggerItem key={c.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.icon}</span>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </div>
                      <Badge variant={c.badge === "Planned" ? "outline" : "secondary"} className="shrink-0">{c.badge}</Badge>
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

        {/* AI Providers */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-2">AI Providers</h2>
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
        </section>

        {/* Upcoming Banner */}
        <FadeUp>
          <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
            <p className="text-sm font-medium text-foreground">
              More integrations coming soon. Request your favorite tool on GitHub.
            </p>
            <a
              href="https://github.com/rajitk13/shiro-automation/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline mt-2 inline-block"
            >
              Request Integration →
            </a>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
