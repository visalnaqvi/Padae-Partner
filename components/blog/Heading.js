export default function Heading({ content }) {
  return (
    <div className="blog-heading-block">
      <span className="heading-marker" />
      <h2 className="sub-headings">{content}</h2>
    </div>
  );
}
