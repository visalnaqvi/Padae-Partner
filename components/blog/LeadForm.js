import LandingLeadForm from "@/components/landing/LeadForm";

export default function LeadForm() {
  return (
    <div className="lead-form" id="blogs-lead-form">
      <LandingLeadForm
        showOffer={true}
        title="Book Free CUET Counseling"
        cta="Book Free Counseling"
      />
    </div>
  );
}
