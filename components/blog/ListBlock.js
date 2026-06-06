export default function ListBlock({ items = [], ordered = false }) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <div className="blog-list-block">
      <Tag className={`blog-list ${ordered ? "blog-list-ordered" : "blog-list-unordered"}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Tag>
    </div>
  );
}
