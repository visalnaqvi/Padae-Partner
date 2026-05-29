"use client";

import {
  CheckCircleOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

export default function Hero({ title, subtitle, label = "Study Guide" }) {
  return (
    <section className="hero blog-hero">
      <div className="hero-content">
        <Tag className="blog-kicker" icon={<ReadOutlined />}>
          {label}
        </Tag>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        <div className="blog-hero-trust">
          <span>
            <SafetyCertificateOutlined /> Editor reviewed
          </span>
          <span>
            <CheckCircleOutlined /> Clear action steps
          </span>
        </div>
      </div>
    </section>
  );
}
