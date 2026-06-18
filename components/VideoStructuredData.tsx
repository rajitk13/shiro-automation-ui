interface VideoStructuredDataProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  width?: number;
  height?: number;
}

export function VideoStructuredData({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  width = 1280,
  height = 720,
}: VideoStructuredDataProps) {
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
    width,
    height,
    publisher: {
      "@type": "Organization",
      name: "Shiro Automation",
      logo: {
        "@type": "ImageObject",
        url: "https://shiro-automation.rajit.cc/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
    />
  );
}
