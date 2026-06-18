interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full pt-[56.25%] ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg border border-border/40"
      />
    </div>
  );
}
