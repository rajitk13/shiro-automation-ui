import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TechStackPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Tech Stack</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the technology behind Shiro&apos;s performance and capabilities.
          </p>
        </div>

        {/* GoLang */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why GoLang?</h2>
          <Card>
            <CardHeader>
              <CardTitle>Performance-First Architecture</CardTitle>
              <CardDescription>
                Built with Go for maximum performance and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Blazing Fast Execution</h3>
                  <p className="text-sm text-muted-foreground">
                    Go&apos;s compiled nature and efficient garbage collector enable Shiro to execute workflows in milliseconds, not seconds.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Single Binary Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Compile to a single static binary with no dependencies. Easy to distribute and deploy across platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Built-in Concurrency</h3>
                  <p className="text-sm text-muted-foreground">
                    Goroutines and channels enable efficient parallel execution of workflow steps without complex threading.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cross-Platform Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Compile for Linux, macOS, Windows, and various architectures (AMD64, ARM64) from a single codebase.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-sm">
                  <strong>Result:</strong> Shiro can process complex DAG workflows with multiple steps in under 100ms, making it ideal for CI/CD pipelines where speed matters.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Module System */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Module System Architecture</h2>
          <Card>
            <CardHeader>
              <CardTitle>Pluggable Design</CardTitle>
              <CardDescription>
                Extensible architecture for custom integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Built-in Modules</h3>
                  <p className="text-sm text-muted-foreground">
                    Core functionality compiled directly into the binary for zero-dependency execution (print, slack, git, AI).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Subprocess Modules</h3>
                  <p className="text-sm text-muted-foreground">
                    External programs communicating via JSON over stdin/stdout. Supports binary mode or go-run mode for flexibility.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">HTTP Modules</h3>
                  <p className="text-sm text-muted-foreground">
                    RESTful API endpoints for module communication with load balancing, health checks, and circuit breakers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-discover and install modules from GitHub repositories with metadata extraction from README files.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Providers */}
        <section>
          <h2 className="text-3xl font-bold mb-6">AI Provider Support</h2>
          <Card>
            <CardHeader>
              <CardTitle>Multi-Provider Architecture</CardTitle>
              <CardDescription>
                First-class support for multiple AI providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ollama</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Local LLM support for privacy and offline operation. Run models like Llama, Mistral, and more on your own hardware.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">OpenAI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      GPT-4 and other OpenAI models for production-grade AI capabilities with enterprise reliability.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Custom</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Any OpenAI-compatible endpoint including local servers, vLLM, or custom deployments.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Environment Variable Resolution</h3>
                <p className="text-sm text-muted-foreground">
                  Secure configuration using <code className="bg-muted px-1 rounded">{"{env.VARIABLE}"}</code> syntax in config files. API keys and sensitive data never need to be hardcoded.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CI Platform Support */}
        <section>
          <h2 className="text-3xl font-bold mb-6">CI Platform Integration</h2>
          <Card>
            <CardHeader>
              <CardTitle>Universal Compatibility</CardTitle>
              <CardDescription>
                Runs in any CI/CD environment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    GitLab CI <Badge variant="secondary">Recommended</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Native support with GitLab artifacts for state storage, human-in-loop approvals, and manual job resumption.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub Actions</h3>
                  <p className="text-sm text-muted-foreground">
                    Full integration with GitHub Actions for automated PR reviews, push notifications, and workflow automation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Jenkins</h3>
                  <p className="text-sm text-muted-foreground">
                    Compatible with Jenkins pipelines using the shiro binary as a build step or shell command.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Kubernetes Jobs</h3>
                  <p className="text-sm text-muted-foreground">
                    Run as Kubernetes Jobs for cloud-native CI/CD with container isolation and scalability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* State Storage */}
        <section>
          <h2 className="text-3xl font-bold mb-6">State Storage Architecture</h2>
          <Card>
            <CardHeader>
              <CardTitle>Flexible Backend Support</CardTitle>
              <CardDescription>
                Modular state storage for different environments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Badge className="mt-1">Default in CI</Badge>
                  <div>
                    <h3 className="font-semibold">GitLab Artifacts</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically uploads workflow state to GitLab CI artifacts and downloads between pipeline stages. No external infrastructure required.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Badge variant="secondary">Local Dev</Badge>
                  <div>
                    <h3 className="font-semibold">Filesystem</h3>
                    <p className="text-sm text-muted-foreground">
                      Stores state in local filesystem for development and testing. Simple and reliable for local workflows.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Badge variant="outline">Ephemeral</Badge>
                  <div>
                    <h3 className="font-semibold">Memory</h3>
                    <p className="text-sm text-muted-foreground">
                      In-memory storage for workflows that don&apos;t require persistence. Fastest option but state is lost after execution.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Performance Characteristics */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Performance Characteristics</h2>
          <Card>
            <CardHeader>
              <CardTitle>Benchmarks & Metrics</CardTitle>
              <CardDescription>
                Real-world performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">&lt;100ms</div>
                  <div className="text-sm text-muted-foreground mt-2">Workflow startup time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10MB</div>
                  <div className="text-sm text-muted-foreground mt-2">Binary size</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground mt-2">Runtime dependencies</div>
                </div>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                <p>
                  Shiro&apos;s Go-based architecture ensures minimal overhead, fast startup times, and efficient resource utilization. The single binary design eliminates dependency hell and makes deployment trivial across environments.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
