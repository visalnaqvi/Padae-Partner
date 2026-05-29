"use client";

import {
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function LeadForm({
  title = "Get Guidance",
  description = "Share your goal and we will help you identify the next practical step.",
}) {
  return (
    <section className="lead-form">
      <div>
        <span className="section-eyebrow">
          <MessageOutlined /> Ask an expert
        </span>
        <h2 className="sub-headings">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <Form layout="vertical" requiredMark={false}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="you@example.com" />
        </Form.Item>
        <Form.Item label="Message" name="message">
          <Input.TextArea rows={4} placeholder="Tell us what you are preparing for" />
        </Form.Item>
        <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
          Submit
        </Button>
      </Form>
    </section>
  );
}
