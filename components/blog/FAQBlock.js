"use client";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

export default function FAQBlock({ items = [], title = "Frequently Asked Questions" }) {
  if (!items.length) {
    return null;
  }

  const collapseItems = items.map((item) => ({
    key: item.question,
    label: (
      <span className="faq-question">
        <QuestionCircleOutlined />
        {item.question}
      </span>
    ),
    children: <p>{item.answer}</p>,
  }));

  return (
    <section className="faq-block">
      <h2 className="sub-headings">{title}</h2>
      <Collapse className="blog-collapse" items={collapseItems} />
    </section>
  );
}
