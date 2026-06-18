# Video SEO Setup Guide

This guide explains how to use the video SEO features implemented for Shiro Automation UI.

## Components Created

### 1. VideoStructuredData Component
Located at `components/VideoStructuredData.tsx`

This component generates JSON-LD structured data for videos using the VideoObject schema from Schema.org. It helps search engines understand your video content.

**Usage:**
```tsx
import { VideoStructuredData } from "@/components/VideoStructuredData";

<VideoStructuredData
  name="Your Video Title"
  description="Your video description"
  thumbnailUrl="https://shiro-automation.rajit.cc/video-thumbnails/your-video.jpg"
  uploadDate="2024-01-01T00:00:00Z"
  duration="PT5M30S"
  contentUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  embedUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
/>
```

### 2. YouTubeEmbed Component
Located at `components/YouTubeEmbed.tsx`

A responsive YouTube embed component with a 16:9 aspect ratio.

**Usage:**
```tsx
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

<YouTubeEmbed
  videoId="YOUR_VIDEO_ID"
  title="Your Video Title"
  className="mb-4"
/>
```

### 3. Sitemap Video Support
Updated `app/sitemap.ts` to include video entries in the sitemap. The sitemap now supports video metadata for pages with embedded videos.

**Current video entry:**
- `/getting-started` - Ready for your tutorial video

### 4. Open Graph Video Metadata
Updated `app/getting-started/metadata.ts` to include Open Graph video metadata, which helps when your content is shared on social media platforms.

## Setup Instructions

### Step 1: Upload Your YouTube Video

1. Create a YouTube video for the getting-started tutorial
2. Note the video ID (the part after `v=` in the YouTube URL)
3. Upload a custom thumbnail to YouTube (1280x720 recommended)

### Step 2: Replace Placeholder Video IDs

Replace `YOUR_VIDEO_ID` in the following files with your actual YouTube video ID:

1. `app/getting-started/page.tsx` (line 78 and 97-98)
2. `app/getting-started/metadata.ts` (line 12)
3. `app/sitemap.ts` (lines 22-23)

**Note**: The getting-started page already has a video configured with ID `VNsUqGyw6kA` (1-minute demo).

### Step 3: Add Video Thumbnail

You can use YouTube's default thumbnails instead of hosting your own:

- **High quality (recommended)**: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg` (1280x720)
- **High quality**: `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg` (480x360)
- **Medium quality**: `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg` (320x180)

The getting-started page already uses YouTube's default thumbnail: `https://img.youtube.com/vi/VNsUqGyw6kA/maxresdefault.jpg`

### Step 4: Update Video Duration

Update the `duration` parameter in:
- `app/getting-started/page.tsx` (line 96)
- `app/sitemap.ts` (line 25)

Format: ISO 8601 duration (e.g., `PT5M30S` = 5 minutes 30 seconds)

### Step 5: Add Videos to Other Pages (Optional)

To add videos to other pages:

1. **Add to page metadata** (e.g., `app/examples/metadata.ts`):
```tsx
export const metadata: Metadata = {
  title: "Examples - Shiro Automation",
  description: "...",
  openGraph: {
    title: "Examples - Shiro Automation",
    description: "...",
    type: "website",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
        width: 1280,
        height: 720,
      },
    ],
  },
};
```

2. **Add video to page component**:
```tsx
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { VideoStructuredData } from "@/components/VideoStructuredData";

// Add YouTubeEmbed where you want the video to appear
<YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Your Video Title" />

// Add VideoStructuredData component (usually at the bottom of the page)
<VideoStructuredData
  name="Your Video Title"
  description="Your video description"
  thumbnailUrl="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
  uploadDate={new Date().toISOString()}
  duration="PT5M30S"
  contentUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  embedUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
/>
```

3. **Add to sitemap** (`app/sitemap.ts`):
```ts
const videoData: Record<string, VideoEntry> = {
  '/getting-started': { /* existing */ },
  '/examples': {
    thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg',
    title: 'Shiro Automation Examples',
    description: 'See real-world examples of Shiro Automation workflows.',
    contentUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    uploadDate: new Date().toISOString(),
    duration: 'PT8M00S',
  },
};
```

## SEO Benefits

- **Video rich snippets**: Google may display your video with thumbnails in search results
- **Increased click-through rates**: Video thumbnails attract more attention
- **Better engagement**: Videos keep users on your site longer
- **Social media optimization**: Open Graph video metadata improves sharing
- **Universal search**: Videos appear in Google's main search results

## Testing

After implementing video SEO:

1. Test your sitemap: `https://shiro-automation.rajit.cc/sitemap.xml`
2. Validate structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Check Open Graph: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
4. Test Twitter Card: [Card Validator](https://cards-dev.twitter.com/validator)

## Best Practices

- Keep videos under 10 minutes for better engagement
- Use custom thumbnails with clear, readable text
- Include keywords in video titles and descriptions
- Add video transcripts for accessibility and SEO
- Ensure videos are responsive on mobile devices
- Use descriptive file names for thumbnails
- Keep video descriptions concise and keyword-rich
