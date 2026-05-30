"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchRecentCommits, GitHubCommit } from "@/lib/github-api";
import { useEffect, useState } from "react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";
import Image from "next/image";

export default function CommitsPage() {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const data = await fetchRecentCommits(30);
        setCommits(data);
      } catch {
        setError("Failed to fetch commits from GitHub");
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getShortSha = (sha: string) => sha.substring(0, 7);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
      <div className="space-y-16">
        <FadeUp>
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Commits</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Recent Commits</h1>
            <div className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest changes from the Shiro Automation repository
            </div>
          </div>
        </FadeUp>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">Loading commits...</div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-destructive">{error}</div>
          </div>
        ) : commits.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">No commits found</div>
          </div>
        ) : (
          <StaggerGroup className="space-y-4">
            {commits.map((commit) => (
              <StaggerItem key={commit.sha}>
                <Card className="border-border/60 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline" className="font-mono">
                            {getShortSha(commit.sha)}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {formatDate(commit.commit.author.date)}
                          </div>
                        </div>
                        <CardTitle className="text-lg mb-2 line-clamp-2">
                          {commit.commit.message}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {commit.author && commit.author.avatar_url && (
                            <div className="relative w-5 h-5 rounded-full overflow-hidden">
                              <Image
                                src={commit.author.avatar_url}
                                alt={commit.author.login || 'author'}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <span>{commit.author?.login || commit.commit.author.name}</span>
                        </div>
                      </div>
                      <a
                        href={commit.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </div>
  );
}
