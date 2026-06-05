export default function SubHeading({ content }) {
  return (
    <div className="blog-subheading-block">
      <span className="subheading-marker" />
      <h3>{content}</h3>
    </div>
  );
}
