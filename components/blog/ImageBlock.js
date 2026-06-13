import Image from "next/image";

export default function ImageBlock({ src, alt, width, height, priority = false }) {
  if (!src) {
    return null;
  }

  return (
    <figure className="content-image">
      <div className="image-frame">
        {/* next/image gives automatic AVIF/WebP + responsive srcset. Content
            blocks rarely declare dimensions, so we fall back to a 16:9 ratio;
            `.content-image img` (width:100%, height:auto) keeps it undistorted. */}
        <Image
          src={src}
          alt={alt || ""}
          width={width || 1200}
          height={height || 675}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 760px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
