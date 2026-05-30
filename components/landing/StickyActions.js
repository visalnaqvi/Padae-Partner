export default function StickyActions() {
  const phone = "+919999999999";
  const whatsappText = encodeURIComponent("Hi, I want to book my CUET UG 2027 seat.");

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
        Book Your Seat Now
      </a>
    </>
  );
}
