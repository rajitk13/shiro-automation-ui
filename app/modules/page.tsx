"use client";

import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community Modules - Shiro Automation Ecosystem",
  description: "Discover and install community modules for Shiro Automation. Extend functionality with Jira, Slack, SonarQube, Docker, and custom modules.",
};
import { Badge } from "@/components/ui/badge";
import { searchShiroModules, GitHubRepo } from "@/lib/github-api";
import { useEffect, useState } from "react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";

export default function ModulesPage() {
  const [modules, setModules] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await searchShiroModules();
        setModules(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch modules:", err);
        setError("Failed to fetch modules from GitHub");
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
      <div className="space-y-16">
        <FadeUp>
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Ecosystem</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Community Modules</h1>
            <div className="text-xl text-muted-foreground max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2">
              <span>Discover and install community modules tagged with</span>
              <Badge>shiro-automation-module</Badge>
            </div>
          </div>
        </FadeUp>

        <section>
          <FadeUp delay={0.1}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Available Modules</h2>
              <p className="text-muted-foreground">
                {loading ? "Loading modules from GitHub..." : `Found ${modules.length} modules from GitHub`}
                {error && <span className="text-destructive ml-2">({error})</span>}
              </p>
            </div>
          </FadeUp>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-muted-foreground">Loading modules...</div>
            </div>
          ) : modules.length === 0 ? (
            <FadeUp delay={0.2}>
              <Card className="border-border/60 glass-card">
                <CardHeader>
                  <CardTitle>No Modules Found</CardTitle>
                  <CardDescription>
                    No repositories found with the <code className="bg-muted px-1 rounded">shiro-automation-module</code> topic yet.
                    Add this topic to your GitHub repository to appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">How to add your module:</p>
                    <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>Go to your repository on GitHub</li>
                      <li>Click Settings → Topics</li>
                      <li>Add the topic: <code className="bg-background px-1 rounded">shiro-automation-module</code></li>
                      <li>Your module will appear here automatically</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ) : (
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module: GitHubRepo) => (
                <StaggerItem key={module.id}>
                  <Card className="group relative overflow-hidden border-border/60 bg-card/70 glass-card flex flex-col h-full transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10 pb-3">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl font-semibold">{module.name}</CardTitle>
                        <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-medium">{module.stargazers_count}</span>
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3 min-h-[3rem]">
                        {module.description || "No description provided"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 flex-1 flex flex-col justify-between pt-0">
                      <div className="space-y-4 mb-4">
                        {module.language && (
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm font-medium">{module.language}</span>
                            <span className="text-xs text-muted-foreground">
                              · Updated {new Date(module.updated_at).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {module.topics && module.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {module.topics.slice(0, 4).map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs px-2 py-0.5 border-border/40">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <a
                        href={module.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:underline decoration-primary/30"
                      >
                        View on GitHub
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </section>

        {/* Built-in Modules */}
        <section>
          <FadeUp delay={0.3}>
            <h2 className="text-3xl font-bold mb-8">Built-in Modules</h2>
            <StaggerGroup className="grid md:grid-cols-2 gap-6">
              {[
                { name: "print", desc: "Console output with log levels", detail: "Print messages to console with different log levels (info, debug, warning, error) and formatting options." },
                { name: "slack.notify", desc: "Slack notifications", detail: "Send notifications to Slack channels via webhooks. Supports custom messages, channels, and bot configuration." },
                { name: "git.diff", desc: "Git operations", detail: "Perform git operations including diff and get_changes. Useful for code review workflows." },
                { name: "ai.generate", desc: "AI content generation", detail: "Generate content using AI models. Supports multiple providers (Ollama, OpenAI, custom endpoints)." },
              ].map((mod) => (
                <StaggerItem key={mod.name}>
                  <Card className="group relative overflow-hidden border-border/60 bg-card/70 glass-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl font-semibold mb-2">{mod.name}</CardTitle>
                      <CardDescription className="text-sm">{mod.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{mod.detail}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FadeUp>
        </section>

        {/* How to Create Modules */}
        <section>
          <FadeUp delay={0.4}>
            <h2 className="text-3xl font-bold mb-6">Create Your Own Module</h2>
            <Card className="border-border/60 glass-card">
              <CardHeader>
                <CardTitle>Contribute to the Community</CardTitle>
                <CardDescription>
                  Build and share your own Shiro modules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Steps to create a module:</p>
                  <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-2">
                    <li>Copy the module template from the Shiro repository</li>
                    <li>Implement your module logic in Go</li>
                    <li>Add a module.yaml with metadata</li>
                    <li>Write documentation in README.md</li>
                    <li>Publish to GitHub</li>
                    <li>Add the <code className="bg-background px-1 rounded">shiro-automation-module</code> topic</li>
                  </ol>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/rajitk13/shiro-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Module Documentation →
                  </a>
                  <a
                    href="https://github.com/rajitk13/shiro-automation/tree/main/examples/module-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Module Template →
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
