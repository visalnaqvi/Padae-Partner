export default function ImageBlock({ src, alt, width, height, priority = false }) {
  if (!src) {
    return null;
  }

  return (
    <figure className="content-image">
      <div className="image-frame">
        <img
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
