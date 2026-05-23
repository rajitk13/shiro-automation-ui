import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Examples</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical examples and configurations for common use cases.
          </p>
        </div>

        {/* GitLab CI Examples */}
        <section>
          <h2 className="text-3xl font-bold mb-6">GitLab CI Configurations</h2>
          <Tabs defaultValue="mr-review" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mr-review">MR Review</TabsTrigger>
              <TabsTrigger value="approval">Approval</TabsTrigger>
              <TabsTrigger value="push">Push Notification</TabsTrigger>
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`stages:
  - review

ai-mr-review:
  stage: review
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
    - chmod +x shiro-linux-amd64
    - mv shiro-linux-amd64 /usr/local/bin/shiro
  script:
    - shiro run examples/mr-review.json -config configs/models.yaml -state-store gitlab
  artifacts:
    paths:
      - .shiro/
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

            <TabsContent value="approval" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Human-in-Loop Approval</CardTitle>
                  <CardDescription>
                    Manual approval workflow with Slack notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`stages:
  - approval

approval-initial:
  stage: approval
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
    - chmod +x shiro-linux-amd64
    - mv shiro-linux-amd64 /usr/local/bin/shiro
  script:
    - shiro validate -workflow examples/conditional-approval-workflow.json -config configs/models.yaml
    - shiro run -workflow examples/conditional-approval-workflow.json -config configs/models.yaml -state-store gitlab -fresh
  artifacts:
    paths:
      - .shiro/
    expire_in: 1 day
  only:
    - main
    - master

approval-resume:
  stage: approval
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
    - chmod +x shiro-linux-amd64
    - mv shiro-linux-amd64 /usr/local/bin/shiro
  script:
    - shiro validate -workflow examples/conditional-approval-workflow.json -config configs/models.yaml
    - shiro run -workflow examples/conditional-approval-workflow.json -config configs/models.yaml -state-store gitlab
  artifacts:
    paths:
      - .shiro/
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`stages:
  - review

push-notification:
  stage: review
  image: ubuntu:latest
  before_script:
    - apt-get update && apt-get install -y curl
    - curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64
    - chmod +x shiro-linux-amd64
    - mv shiro-linux-amd64 /usr/local/bin/shiro
  script:
    - shiro run examples/push-notification.json -config configs/models.yaml
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

            <TabsContent value="jira" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Jira Integration</CardTitle>
                  <CardDescription>
                    Create Jira issues from CI failures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{`stages:
  - test

test-jira:
  stage: test
  image: golang:1.23
  before_script:
    - curl -LOk https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-arm64
    - chmod +x shiro-linux-arm64
    - mv shiro-linux-arm64 /usr/local/bin/shiro
  script:
    - SHIRO_INSECURE_TLS=1 shiro add module github.com/your-org/your-module
    - export GOSUMDB=off
    - export GOPROXY=direct
    - export GIT_SSL_NO_VERIFY=1
    - shiro run
  variables:
    MY_SERVICE_URL: "https://your-service.example.com"`}</code>
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
          <h2 className="text-3xl font-bold mb-6">Workflow Definitions</h2>
          <Tabs defaultValue="simple" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
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
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
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
          <h2 className="text-3xl font-bold mb-6">Configuration Examples</h2>
          <Card>
            <CardHeader>
              <CardTitle>AI Provider Configuration</CardTitle>
              <CardDescription>
                Configure multiple AI providers in config.yaml
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
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

  # Custom OpenAI-compatible endpoint
  custom-llm:
    type: openai
    model: custom-model
    base_url: http://localhost:8000/v1
    api_key: "sk-custom-key"`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
