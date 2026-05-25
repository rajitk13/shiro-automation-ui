"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchShiroReleases, fetchLatestRelease, GitHubRelease } from "@/lib/github-api";
import { useEffect, useState } from "react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/Animate";
import { ReleaseAssetsModal } from "@/components/ReleaseAssetsModal";

export default function ReleasesPage() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [latestReleaseId, setLatestReleaseId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRelease, setSelectedRelease] = useState<GitHubRelease | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [releasesData, latestData] = await Promise.all([
          fetchShiroReleases(),
          fetchLatestRelease(),
        ]);
        setReleases(releasesData);
        if (latestData) {
          setLatestReleaseId(latestData.id);
        }
      } catch {
        setError("Failed to fetch releases from GitHub");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
      <div className="space-y-16">
        <FadeUp>
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">Releases</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">GitHub Releases</h1>
            <div className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest releases from the Shiro Automation repository
            </div>
          </div>
        </FadeUp>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">Loading releases...</div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-destructive">{error}</div>
          </div>
        ) : releases.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">No releases found</div>
          </div>
        ) : (
          <StaggerGroup className="space-y-4">
            {releases.map((release) => (
              <StaggerItem key={release.id}>
                <Card className="border-border/60 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <CardTitle className="text-xl">{release.name}</CardTitle>
                          <Badge variant={release.prerelease ? "secondary" : "default"}>
                            {release.tag_name}
                          </Badge>
                          {release.id === latestReleaseId && (
                            <Badge className="bg-green-500 hover:bg-green-600">Latest</Badge>
                          )}
                          {release.prerelease && (
                            <Badge variant="outline">Pre-release</Badge>
                          )}
                          {release.draft && (
                            <Badge variant="outline">Draft</Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          Published on {formatDate(release.published_at)} by {release.author.login}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {release.body && (
                    <CardContent>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <pre className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                          {release.body}
                        </pre>
                      </div>
                    </CardContent>
                  )}
                  {release.assets && release.assets.length > 0 && (
                    <CardContent>
                      <button
                        onClick={() => {
                          setSelectedRelease(release);
                          setIsModalOpen(true);
                        }}
                        className="w-full p-3 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        View {release.assets.length} asset{release.assets.length > 1 ? 's' : ''}
                      </button>
                    </CardContent>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
      <ReleaseAssetsModal
        release={selectedRelease}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
