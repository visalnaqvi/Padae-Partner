export default function Heading({ content }) {
  return (
    <div className="blog-heading-block">
      <span className="heading-marker" />
      <h2>{content}</h2>
    </div>
  );
}
