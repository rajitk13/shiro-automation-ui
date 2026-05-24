"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompts - Shiro Automation Reference for AI Agents",
  description: "Complete AI reference for Shiro Automation. Installation, configuration, workflow.json structure, module system, and CI/CD integration prompts for AI tools.",
};
import { Badge } from "@/components/ui/badge";

const promptSections = [
  {
    title: "What is Shiro Automation?",
    content: `Shiro Automation is a portable, AI-native workflow orchestration runtime built in Go. It runs inside existing CI/CD pipelines (GitLab CI, GitHub Actions, Jenkins, Kubernetes Jobs) as a single binary — no new infrastructure, no always-on servers.

Key characteristics:
- DAG-based execution with automatic parallelism
- Human-in-the-loop approval gates
- Module system for community extensions
- Multi-provider AI support (Ollama, OpenAI, any OpenAI-compatible endpoint)
- Artifact state storage per pipeline run
- Environment variable-based secrets — zero config file exposure`,
  },
  {
    title: "Installation",
    content: `# Auto-detect install (Linux/macOS)
curl -sSL https://raw.githubusercontent.com/rajitk13/shiro-automation/master/scripts/install-auto.sh | bash

# Manual — Linux AMD64
curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
chmod +x shiro-linux-amd64 && sudo mv shiro-linux-amd64 /usr/local/bin/shiro

# Manual — macOS Apple Silicon
curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-darwin-arm64
chmod +x shiro-darwin-arm64 && sudo mv shiro-darwin-arm64 /usr/local/bin/shiro

# Build from source (requires Go 1.21+)
git clone https://github.com/rajitk13/shiro-automation.git
cd shiro-automation
go build -o shiro ./cmd/runtime
sudo mv shiro /usr/local/bin/shiro

# Docker
docker pull ghcr.io/rajitk13/shiro-automation:latest
docker run --rm -v $(pwd):/workspace ghcr.io/rajitk13/shiro-automation:latest shiro run`,
  },
  {
    title: "Initialize Your Project",
    content: `# Navigate to your project directory
cd your-project

# Initialize Shiro — creates .shiro/ scaffold
shiro init

# This creates:
.shiro/
├── workflow.json     # DAG workflow definition
├── config.yaml       # AI provider configuration
├── modules/
│   └── registry.yaml # Module registry
└── workflows/        # Custom workflow files`,
  },
  {
    title: "workflow.json Structure",
    content: `{
  "name": "my-workflow",
  "version": "1.0.0",
  "steps": [
    {
      "id": "lint",
      "name": "Run Linter",
      "type": "shell",
      "command": "npm run lint",
      "depends_on": []
    },
    {
      "id": "ai-review",
      "name": "AI Code Review",
      "type": "module",
      "module": "ai.review",
      "config": {
        "model": "llama3",
        "focus": ["security", "performance"]
      },
      "depends_on": ["lint"]
    },
    {
      "id": "approval",
      "name": "Human Approval Gate",
      "type": "approval",
      "message": "Review AI findings before deployment",
      "depends_on": ["ai-review"]
    },
    {
      "id": "deploy",
      "name": "Deploy",
      "type": "shell",
      "command": "make deploy",
      "depends_on": ["approval"]
    }
  ]
}`,
  },
  {
    title: "config.yaml — AI Provider Setup",
    content: `# Ollama (local, private)
ai:
  provider: ollama
  base_url: http://localhost:11434
  model: llama3

# OpenAI
ai:
  provider: openai
  api_key: \${OPENAI_API_KEY}
  model: gpt-4o

# Custom OpenAI-compatible endpoint (vLLM, LM Studio)
ai:
  provider: custom
  base_url: http://my-vllm-server:8000
  model: my-model
  api_key: \${MY_API_KEY}`,
  },
  {
    title: "Running Workflows",
    content: `# Run default workflow
shiro run

# Run specific workflow file
shiro run -workflow examples/ai-review.json

# Run with custom config
shiro run -config configs/openai.yaml

# Run with custom .shiro directory
shiro run -shiro-dir /path/to/.shiro`,
  },
  {
    title: "Module System",
    content: `# Add a module (auto-discovers from GitHub)
shiro add module jira

# Add from explicit GitHub URL
shiro add module github.com/user/my-module

# Search modules
shiro search module slack

# List installed modules
shiro list modules

# Remove a module
shiro remove module jira

# Available official modules include:
# - ai.review       — AI-powered code review
# - jira            — Jira ticket integration
# - slack           — Slack notifications
# - sonarqube       — Code quality gates
# - docker.scan     — Container vulnerability scanning`,
  },
  {
    title: "GitLab CI Integration Example",
    content: `# .gitlab-ci.yml
shiro-workflow:
  stage: review
  image: alpine:latest
  before_script:
    - curl -sSL https://raw.githubusercontent.com/rajitk13/shiro-automation/master/scripts/install-auto.sh | sh
  script:
    - shiro run
  artifacts:
    paths:
      - .shiro/artifacts/
  environment:
    OPENAI_API_KEY: \$OPENAI_API_KEY`,
  },
  {
    title: "GitHub Actions Integration Example",
    content: `# .github/workflows/shiro.yml
name: Shiro Workflow
on: [push, pull_request]

jobs:
  shiro:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Shiro
        run: curl -sSL https://raw.githubusercontent.com/rajitk13/shiro-automation/master/scripts/install-auto.sh | bash
      - name: Run Shiro
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
        run: shiro run`,
  },
];

export default function AIPromptsPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-3 py-1">🤖 AI Reference</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Shiro for AI Agents</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Complete reference for AI tools to understand, install, and use Shiro Automation in any project.
          </p>
        </div>

        <div className="space-y-8">
          {promptSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="space-y-3"
            >
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              <pre className="bg-muted rounded-xl p-5 text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-words border border-border/50">
                {section.content}
              </pre>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground block mb-2">Usage tip for AI agents:</strong>
          Copy this entire page as context. Shiro runs as a single binary inside your existing CI runner.
          It reads <code className="bg-muted px-1 rounded">.shiro/workflow.json</code> and{" "}
          <code className="bg-muted px-1 rounded">.shiro/config.yaml</code> — no daemon, no always-on server.
        </div>
      </motion.div>
    </div>
  );
}
