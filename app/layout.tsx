import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { ChimeEffect } from "@/components/ChimeEffect";
import { DynamicTheme } from "@/components/DynamicTheme";
import { MobileNav } from "@/components/MobileNav";
import { FloatingAIButton } from "@/components/FloatingAIButton";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Shiro Automation",
  "description": "A portable workflow orchestration runtime optimized for CI/CD environments with AI-native capabilities. Built with Go for blazing fast performance.",
  "url": "https://shiro-automation.rajit.cc",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS, Windows",
  "programmingLanguage": "Go",
  "author": {
    "@type": "Person",
    "name": "Rajit Kuthiala",
    "url": "https://www.linkedin.com/in/rajitkuthiala/",
    "sameAs": ["https://github.com/rajitk13", "https://www.linkedin.com/in/rajitkuthiala/"]
  },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "license": "https://opensource.org/licenses/Apache-2.0",
  "sourceCode": "https://github.com/rajitk13/shiro-automation",
  "featureList": ["AI-native workflow automation","DAG-based execution","Module system","GitLab CI integration","GitHub Actions integration","Human-in-loop approvals","Multiple AI provider support"]
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiro Automation - AI-Native CI/CD Workflow Runtime",
  description: "Shiro Automation: A portable, zero-infrastructure workflow orchestration runtime for CI/CD. AI-native, DAG-based execution, GitLab CI & GitHub Actions integration. Single binary, no servers.",
  keywords: ["shiro", "shiro-automation", "automation", "CI/CD automation", "automation tools", "no infra automation", "workflow automation", "AI-native CI", "GitLab CI", "GitHub Actions", "Jenkins", "Kubernetes CI", "DevOps automation", "DAG workflow", "human-in-loop", "module system", "Ollama", "OpenAI integration"],
  authors: [{ name: "Rajit Kuthiala" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Shiro Automation - AI-Native CI Workflow Runtime",
    description: "A portable workflow orchestration runtime optimized for CI/CD environments with AI-native capabilities.",
    url: "https://shiro-automation.rajit.cc",
    siteName: "Shiro Automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiro Automation - AI-Native CI Workflow Runtime",
    description: "A portable workflow orchestration runtime optimized for CI/CD environments with AI-native capabilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ChimeEffect />
          <DynamicTheme />
          <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group">
                  <Logo size={34} />
                  <span className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                    Shiro
                  </span>
                  <span className="text-xs text-muted-foreground font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                    Automation
                  </span>
                </Link>
                <div className="hidden md:flex items-center gap-1">
                  {[
                    ["Get Started", "/getting-started"],
                    ["Examples", "/examples"],
                    ["Modules", "/modules"],
                    ["Integrations", "/integrations"],
                    ["Releases", "/releases"],
                    ["Roadmap", "/roadmap"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="w-px h-4 bg-border mx-2" />
                  <a
                    href="https://shiro-docs.rajit.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                  >
                    Docs
                  </a>
                  <a
                    href="https://github.com/rajitk13/shiro-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                  >
                    GitHub
                  </a>
                  <ThemeToggle />
                </div>
                <MobileNav />
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <FloatingAIButton />
          <footer className="border-t border-border/60 py-6 mt-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col gap-3 items-center text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-muted-foreground">
                  Shiro Automation — Apache 2.0
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <a href="https://shiro-docs.rajit.cc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docs</a>
                  <a href="https://github.com/rajitk13/shiro-automation" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/rajitkuthiala/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                  <span>Built by Rajit Kuthiala</span>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
