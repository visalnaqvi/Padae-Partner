export default function ImageBlock({ src, alt }) {
  if (!src) {
    return null;
  }

  return (
    <figure className="content-image">
      <div className="image-frame">
        <img src={src} alt={alt || ""} />
      </div>
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
