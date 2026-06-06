"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const quickRef = [
  { icon: "🤖", title: "AI MR Review", desc: "Automated code review on merge requests using AI", badges: ["GitLab CI", "GitHub Actions", "AI"] },
  { icon: "👋", title: "Human-in-Loop Approval", desc: "Two-stage approval with Slack notification and manual trigger", badges: ["GitLab CI", "Slack", "Approval"] },
  { icon: "🔔", title: "Push Notification", desc: "Notify your team on every push to main/master", badges: ["GitLab CI", "GitHub Actions", "Slack"] },
  { icon: "📊", title: "Jira Integration", desc: "Create Jira issues from CI events using subprocess modules", badges: ["GitLab CI", "Jira"] },
];

export default function ExamplesPage() {
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
            <Badge variant="secondary" className="mb-2 text-sm px-3 py-1">Real-World Usage</Badge>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-text">Examples</h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Practical examples and configurations for common use cases.
          </motion.p>
        </motion.div>

        {/* Quick reference */}
        <section>
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">What&apos;s Available</h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quickRef.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="border-border/60 h-full hover:border-primary/40 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="mt-1">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-1.5 flex-wrap">
                      {item.badges.map((b) => <Badge key={b} variant="outline" className="text-xs">{b}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* GitLab CI Examples */}
        <section>
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">GitLab CI Configurations</h2>
          </FadeUp>
          <Tabs defaultValue="mr-review" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 justify-start">
              <TabsTrigger value="mr-review">MR Review</TabsTrigger>
              <TabsTrigger value="gh-pr-review">GH PR Review</TabsTrigger>
              <TabsTrigger value="approval">Approval</TabsTrigger>
              <TabsTrigger value="push">Push Notification</TabsTrigger>
              <TabsTrigger value="gh-push">GH Push</TabsTrigger>
              <TabsTrigger value="jira">Jira Integration</TabsTrigger>
            </TabsList>

            <TabsContent value="mr-review" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered MR Review</CardTitle>
                  <CardDescription>
                    Automated code review using AI on merge requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`stages:
  - review

ai-mr-review:
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
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      This workflow automatically reviews merge requests using AI, providing feedback on code quality and potential issues.
                    </p>
                    <Badge variant="outline">GitLab CI</Badge>
                    <Badge variant="outline">AI</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gh-pr-review" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub PR Review</CardTitle>
                  <CardDescription>
                    AI-powered code review for GitHub pull requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{"name: AI PR Review\n\non:\n  pull_request:\n    types: [opened, synchronize, reopened]\n\njobs:\n  ai-review:\n    runs-on: ubuntu-latest\n    container:\n      image: ghcr.io/rajitk13/shiro-automation:latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Run AI Review\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n        run: shiro run -workflow .shiro/workflows/github-mr-review.json -config .shiro/config.yaml"}</code>
                  </pre>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Automatically reviews GitHub pull requests using AI and posts comments to the PR.
                    </p>
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">AI</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="approval" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Human-in-Loop Approval</CardTitle>
                  <CardDescription>
                    Manual approval workflow with Slack notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`stages:
  - approval

approval-initial:
  stage: approval
  image: ghcr.io/rajitk13/shiro-automation:latest
  script:
    - shiro validate -workflow .shiro/workflows/conditional-approval-workflow.json -config .shiro/config.yaml
    - shiro run -workflow .shiro/workflows/conditional-approval-workflow.json -config .shiro/config.yaml -state-store gitlab -fresh
  artifacts:
    paths:
      - .shiro/state/
    expire_in: 1 day
  only:
    - main
    - master

approval-resume:
  stage: approval
  image: ghcr.io/rajitk13/shiro-automation:latest
  script:
    - shiro validate -workflow .shiro/workflows/conditional-approval-workflow.json -config .shiro/config.yaml
    - shiro run -workflow .shiro/workflows/conditional-approval-workflow.json -config .shiro/config.yaml -state-store gitlab
  artifacts:
    paths:
      - .shiro/state/
    expire_in: 1 day
  when: manual
  needs:
    - approval-initial
  only:
    - main
    - master`}</code>
                  </pre>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Two-stage approval workflow: initial stage sends Slack notification and pauses, resume stage requires manual trigger.
                    </p>
                    <Badge variant="outline">GitLab CI</Badge>
                    <Badge variant="outline">Slack</Badge>
                    <Badge variant="outline">Approval</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="push" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Push Notification</CardTitle>
                  <CardDescription>
                    Notify team on push to main branch
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`stages:
  - review

push-notification:
  stage: review
  image: ghcr.io/rajitk13/shiro-automation:latest
  script:
    - shiro run -workflow .shiro/workflows/push-notification.json -config .shiro/config.yaml
  only:
    - main
    - master`}</code>
                  </pre>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Sends a Slack notification when code is pushed to main or master branches.
                    </p>
                    <Badge variant="outline">GitLab CI</Badge>
                    <Badge variant="outline">Slack</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gh-push" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Push Notification</CardTitle>
                  <CardDescription>
                    Notify team on push to main branch
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{"name: Push Notification\n\non:\n  push:\n    branches:\n      - main\n      - master\n\njobs:\n  notify:\n    runs-on: ubuntu-latest\n    container:\n      image: ghcr.io/rajitk13/shiro-automation:latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Send Notification\n        env:\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}\n        run: shiro run -workflow .shiro/workflows/github-push-notification.json -config .shiro/config.yaml"}</code>
                  </pre>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Sends a Slack notification when code is pushed to main or master branches on GitHub.
                    </p>
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">Slack</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jira" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Jira Integration</CardTitle>
                  <CardDescription>
                    Create Jira issues from CI failures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`stages:
  - test

test-jira:
  stage: test
  image: ghcr.io/rajitk13/shiro-automation:latest
  script:
    - shiro add module github.com/rajitk13/shiro-automation-jira-datacenter
    - export GOSUMDB=off
    - export GOPROXY=direct
    - shiro run
  variables:
    JIRA_BASE_URL: $JIRA_BASE_URL
    JIRA_API_TOKEN: $JIRA_API_TOKEN`}</code>
                  </pre>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Uses subprocess module (Jira) to create issues when tests fail. Requires Jira module installation.
                    </p>
                    <Badge variant="outline">GitLab CI</Badge>
                    <Badge variant="outline">Jira</Badge>
                    <Badge variant="outline">Subprocess</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Workflow Examples */}
        <section>
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Workflow Definitions</h2>
          </FadeUp>
          <Tabs defaultValue="simple" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 justify-start">
              <TabsTrigger value="simple">Simple Test</TabsTrigger>
              <TabsTrigger value="print">Print Example</TabsTrigger>
              <TabsTrigger value="ai">AI Generate</TabsTrigger>
              <TabsTrigger value="slack">Slack Notify</TabsTrigger>
            </TabsList>

            <TabsContent value="simple" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Test Workflow</CardTitle>
                  <CardDescription>
                    Basic workflow with print steps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`{
  "name": "simple-test",
  "description": "Simple test workflow using print module",
  "steps": [
    {
      "id": "test_info",
      "type": "print",
      "config": {
        "message": "Starting simple test workflow",
        "level": "info"
      }
    },
    {
      "id": "test_debug",
      "type": "print",
      "config": {
        "message": "Debug: Testing variable resolution",
        "level": "debug"
      }
    },
    {
      "id": "test_complete",
      "type": "print",
      "config": {
        "message": "Test workflow completed successfully!",
        "level": "info"
      }
    }
  ]
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="print" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Print Module Example</CardTitle>
                  <CardDescription>
                    Using the print module with different log levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`{
  "name": "print-example",
  "steps": [
    {
      "id": "log_info",
      "type": "print",
      "config": {
        "message": "Step output: {"{steps.review.content}"}",
        "level": "info",
        "format": "text"
      }
    },
    {
      "id": "log_error",
      "type": "print",
      "config": {
        "message": "Error occurred",
        "level": "error"
      }
    },
    {
      "id": "log_warning",
      "type": "print",
      "config": {
        "message": "Warning: This is a test warning",
        "level": "warning"
      }
    }
  ]
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Generate Example</CardTitle>
                  <CardDescription>
                    Generate content using AI models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`{
  "name": "ai-example",
  "steps": [
    {
      "id": "generate_content",
      "type": "ai.generate",
      "config": {
        "provider": "openai",
        "model": "gpt-4",
        "prompt": "Review this code and provide feedback",
        "system": "You are a code review assistant",
        "temperature": 0.7,
        "max_tokens": 1000
      }
    },
    {
      "id": "print_result",
      "type": "print",
      "config": {
        "message": "AI Review: {"{steps.generate_content.output}"}",
        "level": "info"
      }
    }
  ]
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="slack" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Slack Notification Example</CardTitle>
                  <CardDescription>
                    Send notifications to Slack channels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                    <code>{`{
  "name": "slack-example",
  "steps": [
    {
      "id": "notify_team",
      "type": "slack.notify",
      "config": {
        "webhook_url": "{"{env.SLACK_WEBHOOK_URL}"}",
        "channel": "#deployments",
        "message": "Deployment completed successfully",
        "username": "Shiro Bot",
        "icon_emoji": ":rocket:"
      }
    }
  ]
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Configuration Examples */}
        <section>
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Configuration Examples</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>AI Provider Configuration</CardTitle>
                <CardDescription>
                  Configure multiple AI providers in config.yaml
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-xs whitespace-pre-wrap break-all">
                  <code>{`models:
  # Ollama local models
  codellama:
    type: ollama
    model: codellama:34b
    base_url: http://localhost:11434

  # OpenAI-compatible providers
  gpt-4:
    type: openai
    model: gpt-4
    base_url: https://api.openai.com/v1
    api_key: "{"{env.OPENAI_API_KEY}"}"

  # Gemini (Google AI Studio)
  gemini:
    type: gemini
    model: gemini-1.5-pro
    api_key: "{"{env.GEMINI_API_KEY}"}"
    api_type: "google-ai-studio"

  # Custom OpenAI-compatible endpoint
  custom-llm:
    type: openai
    model: custom-model
    base_url: http://localhost:8000/v1
    api_key: "sk-custom-key"`}</code>
                </pre>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

      </div>
    </div>
  );
}
