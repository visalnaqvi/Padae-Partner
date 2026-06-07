import QuestionCircleIcon from "@/components/icons/QuestionCircleIcon";

export default function FAQBlock({ items = [], title = "Frequently Asked Questions" }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="faq-block">
      <h2 className="sub-headings">{title}</h2>
      <div className="blog-faq-list">
        {items.map((item) => (
          <details className="blog-faq-item" key={item.question}>
            <summary className="faq-question">
              <QuestionCircleIcon />
              {item.question}
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
