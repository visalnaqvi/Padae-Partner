"use client";

import { ArrowRightOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CTAButton({
  title,
  buttonText,
  buttonUrl,
  description = "Get clear guidance from Padae Partner before you choose your next step.",
}) {
  return (
    <section className="cta-section">
      <div>
        <span className="section-eyebrow">
          <SafetyCertificateOutlined /> Trusted guidance
        </span>
        {title ? <h2 className="sub-headings">{title}</h2> : null}
        {description ? <p>{description}</p> : null}
      </div>
      {buttonUrl && buttonText ? (
        <Link className="cta-link-button" href={buttonUrl}>
          <ArrowRightOutlined />
          <span>{buttonText}</span>
        </Link>
      ) : null}
    </section>
  );
}
