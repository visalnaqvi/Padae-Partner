import WhatsAppOutlined from "../icons/WhatsAppOutlined";
import PhoneFilled from "../icons/PhoneFilled";
export default function StickyActions() {
  const phone = "+918920152023";
  const whatsappText = encodeURIComponent("Hi, I want to book my CUET UG 2027 seat.");

  return (
    <div className="lp-sticky-contact" aria-label="Quick contact actions">
      <a
        className="lp-sticky-whatsapp"
        href={`https://wa.me/918920152023?text=${whatsappText}`}
        aria-label="Contact on WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppOutlined aria-hidden="true" />
      </a>
      <a className="lp-sticky-call" href={`tel:${phone}`} aria-label="Call now" title="Call">
        <PhoneFilled aria-hidden="true" />
      </a>
    </div>
  );
}
