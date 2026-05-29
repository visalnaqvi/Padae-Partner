export default function FAQAccordion({ faqs }) {
  return (
    <div className="lp-faq-list">
      {faqs.map((faq) => (
        <details key={faq.question} className="lp-faq-item">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
