import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Getting Started</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get up and running with Shiro in minutes. No complex configuration required.
          </p>
        </div>

        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Installation</h2>
          <Tabs defaultValue="auto" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="auto">Auto-detect</TabsTrigger>
              <TabsTrigger value="download">Download</TabsTrigger>
              <TabsTrigger value="build">Build from Source</TabsTrigger>
              <TabsTrigger value="docker">Docker</TabsTrigger>
            </TabsList>

            <TabsContent value="auto" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Auto-detect Installation (Recommended)</CardTitle>
                  <CardDescription>
                    Automatically detects your platform and installs the correct binary
                  </CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle>Download Pre-built Binaries</CardTitle>
                  <CardDescription>
                    Download the binary for your platform from GitHub releases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Linux</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-amd64</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">macOS (Intel)</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-darwin-amd64</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">macOS (Apple Silicon)</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-darwin-arm64</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Windows</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>curl -LO https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-windows-amd64.exe</code>
                    </pre>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm">
                      After downloading, make it executable (Linux/macOS) and add to PATH:
                    </p>
                    <pre className="mt-2 text-xs">
                      <code>chmod +x shiro-[platform] &amp;&amp; sudo mv shiro-[platform] /usr/local/bin/shiro</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="build" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Build from Source</CardTitle>
                  <CardDescription>
                    Build Shiro from source code
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>git clone https://github.com/rajitk13/shiro-automation.git
cd shiro-automation
go build -o shiro ./cmd/runtime
sudo mv shiro /usr/local/bin/shiro</code>
                  </pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    Requires Go 1.21 or later installed on your system.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docker" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Docker</CardTitle>
                  <CardDescription>
                    Use Shiro in a Docker container
                  </CardDescription>
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
        </section>

        {/* Initialize Project */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Initialize Your Project</h2>
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>
                Create a new Shiro project in seconds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>cd your-project
shiro init</code>
              </pre>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm mb-2">This creates the following structure:</p>
                <pre className="text-xs">
                  <code>.shiro/
├── workflow.json          # Your workflow definition
├── config.yaml           # AI model configuration
├── modules/
│   └── registry.yaml     # Module registry
└── workflows/            # Additional workflows</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Run First Workflow */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Run Your First Workflow</h2>
          <Card>
            <CardHeader>
              <CardTitle>Execute Workflows</CardTitle>
              <CardDescription>
                Run workflows with auto-detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>shiro run</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Automatically detects <code className="bg-muted px-1 rounded">.shiro/workflow.json</code> and <code className="bg-muted px-1 rounded">.shiro/config.yaml</code>.
              </p>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-semibold">Other useful commands:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                  <code># Run specific workflow
shiro run -workflow examples/simple-test.json

# Run with custom config
shiro run -config configs/models.yaml

# Run with custom .shiro directory
shiro run -shiro-dir /path/to/custom/.shiro</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Module Management */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Module Management</h2>
          <Card>
            <CardHeader>
              <CardTitle>Add and Manage Modules</CardTitle>
              <CardDescription>
                Extend Shiro with community modules
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code># Add a module (auto-discovers from GitHub)
shiro add module jira

# Add module from GitHub URL
shiro add module github.com/user/custom-module

# Search for modules
shiro search module slack

# List installed modules
shiro list modules

# Remove a module
shiro remove module jira</code>
              </pre>
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 text-sm flex flex-wrap items-center gap-1">
                <strong>Tip:</strong>
                <span>Visit the <a href="/modules" className="text-primary underline">Modules</a> page to discover community modules tagged with</span>
                <Badge className="ml-1">shiro-automation-module</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* GitLab CI Integration */}
        <section>
          <h2 className="text-3xl font-bold mb-6">GitLab CI Integration</h2>
          <Card>
            <CardHeader>
              <CardTitle>Integrate with GitLab CI/CD</CardTitle>
              <CardDescription>
                Use Shiro in your GitLab pipelines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                <code>stages:
  - review

ai-review:
  stage: review
  image: golang:1.23
  before_script:
    - curl -LOk https://github.com/rajitk13/shiro-automation/releases/latest/download/shiro-linux-arm64
    - chmod +x shiro-linux-arm64
    - mv shiro-linux-arm64 /usr/local/bin/shiro
  script:
    - shiro run
  rules:
    - if: $CI_PIPELINE_SOURCE == &apos;merge_request_event&apos;</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                See the <a href="/examples" className="text-primary underline">Examples</a> page for more GitLab CI configurations.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Explore Examples</CardTitle>
                <CardDescription>
                  Check out workflow examples for common use cases
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>View Architecture</CardTitle>
                <CardDescription>
                  Understand how Shiro orchestrates workflows
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Browse Modules</CardTitle>
                <CardDescription>
                  Discover community modules to extend functionality
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Read Documentation</CardTitle>
                <CardDescription>
                  Comprehensive documentation for advanced features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
