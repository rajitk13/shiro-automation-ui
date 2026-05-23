import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Future plans and development roadmap for Shiro Automation.
          </p>
        </div>

        {/* Current Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Current Features</h2>
          <Card>
            <CardHeader>
              <CardTitle>✅ Available Now</CardTitle>
              <CardDescription>
                Features that are already implemented and stable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Core Functionality</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• DAG-based workflow execution</li>
                    <li>• Built-in modules (print, slack, git, AI)</li>
                    <li>• Subprocess module support</li>
                    <li>• Variable resolution</li>
                    <li>• State storage backends</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">CI Integration</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• GitLab CI native support</li>
                    <li>• GitHub Actions integration</li>
                    <li>• Human-in-loop approvals</li>
                    <li>• Manual job resumption</li>
                    <li>• Artifact-based state storage</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">AI Capabilities</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ollama local models</li>
                    <li>• OpenAI integration</li>
                    <li>• Custom OpenAI-compatible endpoints</li>
                    <li>• Environment variable resolution</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Developer Experience</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Simplified CLI commands</li>
                    <li>• Auto-detection of configs</li>
                    <li>• Module auto-discovery</li>
                    <li>• GitHub marketplace integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Planned Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Planned Features</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Visual Workflow Builder</CardTitle>
                  <Badge variant="secondary">Future</Badge>
                </div>
                <CardDescription>
                  Drag-and-drop interface for creating workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A web-based visual editor for creating and editing workflow.json files. Features include:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Drag-and-drop node-based editor</li>
                  <li>• Real-time validation</li>
                  <li>• Visual DAG representation</li>
                  <li>• Export/import workflow.json</li>
                  <li>• Module library integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Enhanced Module Registry</CardTitle>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <CardDescription>
                  Centralized module marketplace with ratings and reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Building a centralized registry for Shiro modules with improved discovery and management:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Module ratings and reviews</li>
                  <li>• Version management</li>
                  <li>• Security scanning</li>
                  <li>• Dependency management</li>
                  <li>• Usage analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Additional CI Platform Support</CardTitle>
                  <Badge variant="outline">Planned</Badge>
                </div>
                <CardDescription>
                  Support for more CI/CD platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CircleCI integration</li>
                  <li>• Azure Pipelines support</li>
                  <li>• Bitbucket Pipelines</li>
                  <li>• AWS CodeBuild</li>
                  <li>• Google Cloud Build</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Advanced AI Features</CardTitle>
                  <Badge variant="outline">Planned</Badge>
                </div>
                <CardDescription>
                  Enhanced AI-powered workflow capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-step AI chains</li>
                  <li>• AI-powered workflow generation</li>
                  <li>• Natural language to workflow conversion</li>
                  <li>• AI-powered debugging and suggestions</li>
                  <li>• Custom fine-tuned models for CI/CD</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Enterprise Features</CardTitle>
                  <Badge variant="outline">Planned</Badge>
                </div>
                <CardDescription>
                  Features for enterprise deployments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• RBAC and permissions</li>
                  <li>• Audit logging</li>
                  <li>• SSO integration</li>
                  <li>• Self-hosted module registry</li>
                  <li>• Enterprise support plans</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Community Contributions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Community Contributions</h2>
          <Card>
            <CardHeader>
              <CardTitle>How to Contribute</CardTitle>
              <CardDescription>
                Join the community and help shape Shiro&apos;s future
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Build Modules</h3>
                  <p className="text-sm text-muted-foreground">
                    Create custom modules for your favorite tools and services. Share them with the community by adding the <code className="bg-muted px-1 rounded">shiro-automation-module</code> topic to your GitHub repository.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Report Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    Found a bug or have a feature request? Open an issue on GitHub to help us improve Shiro.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Submit PRs</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribute code, documentation, or tests. We welcome all contributions that improve Shiro.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Spread the Word</h3>
                  <p className="text-sm text-muted-foreground">
                    Share Shiro with your team and community. More users mean more feedback and better features.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-4">
                <a
                  href="https://github.com/rajitk13/shiro-automation/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Report an Issue →
                </a>
                <a
                  href="https://github.com/rajitk13/shiro-automation/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Submit a PR →
                </a>
                <a
                  href="https://github.com/rajitk13/shiro-automation/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Start a Discussion →
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Timeline</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q2 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Enhanced module registry</li>
                  <li>• Additional CI platform support</li>
                  <li>• Improved documentation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q3 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visual workflow builder (alpha)</li>
                  <li>• Advanced AI features</li>
                  <li>• Performance optimizations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q4 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visual workflow builder (beta)</li>
                  <li>• Enterprise features (alpha)</li>
                  <li>• Community module marketplace</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
