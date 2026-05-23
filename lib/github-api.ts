export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
}

export async function searchShiroModules(): Promise<GitHubRepo[]> {
  try {
    // Try multiple query approaches to find the repo
    const queries = [
      `q=topic:shiro-automation-module&sort=stars&order=desc&per_page=20`,
      `q=shiro-automation-module+in:topics&sort=stars&order=desc&per_page=20`,
      `q=shiro+automation+module&sort=stars&order=desc&per_page=20`,
    ];

    for (const query of queries) {
      const response = await fetch(
        `https://api.github.com/search/repositories?${query}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'Shiro-Automation-UI',
          },
          next: { revalidate: 3600 },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          return data.items;
        }
      }
    }

    // If no results, return empty array
    return [];
  } catch (error) {
    console.error('Error fetching GitHub modules:', error);
    return [];
  }
}
