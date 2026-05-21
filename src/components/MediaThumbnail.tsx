type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function MediaThumbnail({ src, alt, className = '' }: Props) {
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

  if (isVideo) {
    return (
      <video
        src={src}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        className={className}
      />
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
