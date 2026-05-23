import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

const dagLayers = [
  { icon: "⚡", label: "Trigger Adapters", desc: "GitLab · GitHub · Jenkins · Kubernetes", color: "bg-muted border-border" },
  { icon: "🧠", label: "Workflow Runtime", desc: "Go execution engine · State management", color: "bg-muted border-border" },
  { icon: "🔀", label: "DAG Executor", desc: "Topological sort · Parallel execution", color: "bg-muted border-border" },
  { icon: "🧩", label: "Module System", desc: "Built-in modules · Subprocess modules", color: "bg-muted border-border" },
  { icon: "🚀", label: "Integrations", desc: "AI · Git · Slack · Jira · Custom", color: "bg-muted border-border" },
];

const moduleCards = [
  {
    title: "Built-in Modules",
    badge: "Zero dependency",
    items: [
      "print - Console output with log levels",
      "slack.notify - Slack notifications",
      "git.diff - Git operations",
      "ai.generate - AI content generation",
    ],
  },
  {
    title: "Subprocess Modules",
    badge: "Extensible",
    items: [
      "Binary mode: Pre-compiled from GitHub releases",
      "Go-run mode: Executed via go run",
      "Auto-detection based on module.yaml",
      "Example: Jira Data Center integration",
    ],
  },
];

const stateCards = [
  { title: "GitLab Artifacts", badge: "CI native", desc: "Stores workflow state in GitLab CI artifacts. Automatically uploaded and downloaded between pipeline stages." },
  { title: "Filesystem", badge: "Local dev", desc: "Stores state in local filesystem. Ideal for local development and testing workflows." },
  { title: "Memory", badge: "Fastest", desc: "In-memory state storage. Fastest option but state is lost after execution completes." },
];

export default function ArchitecturePage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <div className="space-y-16">
        <FadeUp>
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">System Design</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">Architecture</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding Shiro&apos;s modular architecture and how it orchestrates workflows efficiently.
            </p>
          </div>
        </FadeUp>

        {/* High-Level Architecture */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-8">Orchestration Flow</h2>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-2xl">Workflow Execution Pipeline</CardTitle>
                <CardDescription>How Shiro processes workflows from trigger to completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-0 py-4">
                  {dagLayers.map((layer, i) => (
                    <div key={layer.label} className="flex flex-col items-center w-full max-w-lg">
                      <div className={`w-full border rounded-xl px-6 py-4 ${layer.color} transition-all duration-200 hover:border-primary/40`}>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{layer.icon}</span>
                          <div>
                            <div className="font-semibold text-sm">{layer.label}</div>
                            <div className="text-xs opacity-70 mt-0.5">{layer.desc}</div>
                          </div>
                        </div>
                      </div>
                      {i < dagLayers.length - 1 && (
                        <div className="text-muted-foreground text-2xl py-1">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>

        <Separator />

        {/* Module System */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">Module System</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {moduleCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="border-border/60 h-full transition-all duration-200 hover:border-primary/40">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-2xl">{card.title}</CardTitle>
                      <Badge variant="secondary">{card.badge}</Badge>
                    </div>
                    <CardDescription>
                      {card.title === "Built-in Modules"
                        ? "Compiled into the main binary for zero-dependency execution"
                        : "External programs communicating via JSON over stdin/stdout"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* Subprocess Architecture */}
        <section>
          <FadeUp>
          <h2 className="text-3xl font-bold mb-6">Subprocess Architecture</h2>
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-2xl">External Module Communication</CardTitle>
              <CardDescription>
                How Shiro communicates with subprocess modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="execution-modes">
                  <AccordionTrigger>Execution Modes</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Binary Mode</h4>
                        <p className="text-sm text-muted-foreground">
                          Downloads pre-compiled binaries from GitHub releases. Fastest execution with no compilation overhead.
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Go-Run Mode</h4>
                        <p className="text-sm text-muted-foreground">
                          Executes modules via <code className="bg-muted px-1 rounded">go run</code> directly from GitHub repositories.
                          Fallback when no binary is available for the platform.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="http-api">
                  <AccordionTrigger>HTTP API Contract</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">POST /execute</h4>
                        <p className="text-muted-foreground">Executes module with workflow step data</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">GET /metadata</h4>
                        <p className="text-muted-foreground">Returns module metadata including input/output schemas</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">GET /health</h4>
                        <p className="text-muted-foreground">Health check endpoint for load balancing</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="load-balancing">
                  <AccordionTrigger>Load Balancing</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Round-robin load balancing across endpoints</li>
                      <li>• Health check-based endpoint removal</li>
                      <li>• Circuit breaker pattern for failed endpoints</li>
                      <li>• Retry logic with automatic failover</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          </FadeUp>
        </section>

        <Separator />

        {/* State Storage */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">State Storage Backends</h2>
          </FadeUp>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {stateCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="border-border/60 h-full transition-all duration-200 hover:border-primary/40">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{card.badge}</Badge>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <Separator />

        {/* Native Modules Support */}
        <section>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-6">Native Modules Support</h2>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-2xl">Creating Custom Modules</CardTitle>
                <CardDescription>
                  Extend Shiro with your own integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Shiro supports a decentralized module architecture that enables external contributors to create custom modules for SaaS applications without modifying the core codebase.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Module Template Structure</h4>
                    <pre className="text-xs overflow-x-auto">
{`your-module/
├── main.go           # Module implementation
├── config.yaml       # Module configuration
├── module.yaml       # Shiro metadata
└── README.md         # Documentation`}
                    </pre>
                  </div>
                  <p className="text-muted-foreground">
                    Use the module template from the examples directory to get started quickly. Modules can be distributed via GitHub or a community registry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
