"use client";

import {
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function LeadForm({
  title = "Get Guidance",
  description = "Share your goal and we will help you identify the next practical step.",
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="lead-form">
      <div>
        <span className="section-eyebrow">
          <MessageOutlined /> Ask an expert
        </span>
        <h2 className="sub-headings">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <span className="lead-form-control">
            <UserOutlined />
            <input name="name" placeholder="Your name" required />
          </span>
        </label>
        <label>
          <span>Email</span>
          <span className="lead-form-control">
            <MailOutlined />
            <input name="email" placeholder="you@example.com" required type="email" />
          </span>
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            placeholder="Tell us what you are preparing for"
            rows={4}
          />
        </label>
        <button className="lead-form-submit" type="submit">
          <SendOutlined />
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
}
