export default function StickyActions() {
  const phone = "+919999999999";
  const whatsappText = encodeURIComponent("Hi, I want free counseling for CUET UG 2027 preparation.");

  return (
    <>
      <div className="lp-sticky-contact" aria-label="Quick contact actions">
        <a className="lp-sticky-whatsapp" href={`https://wa.me/919999999999?text=${whatsappText}`}>
          WhatsApp
        </a>
        <a className="lp-sticky-call" href={`tel:${phone}`}>
          Call
        </a>
      </div>
      <a className="lp-mobile-cta" href="#lead-form">
        Get Free Counseling
      </a>
    </>
  );
}
