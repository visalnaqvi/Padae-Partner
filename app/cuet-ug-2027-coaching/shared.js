// Shared landing-page data reused across the CUET UG 2027 coaching pages
// (main, /online-coaching, /offline-coaching). Keep images/testimonials in
// one place so all three pages stay consistent.

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export const heroStats = [
  ["5000+", "Students Mentored"],
  ["95%+", "Success Rate"],
  ["12+", "Years Experience"],
  ["1000+", "University Admissions"],
];

export const universities = ["Delhi University", "BHU", "JMI", "AMU", "Other Top Universities"];

export const testimonials = [
  ["Ritika Verma", "748/800", "BHU", "The PYQ practice made the paper feel familiar and manageable.", "/Ritika_Verma.png"],
  ["Kabir Singh", "701/800", "AMU", "Doubt sessions helped me fix weak topics without losing momentum.", "/Kabir_Singh.png"],
  ["Ananya Das", "756/800", "Delhi University", "The study planner kept my CUET preparation structured with school work.", "/Ananya_Das.png"],
  ["Yusuf Ali", "729/800", "BHU", "Admission counseling made course and university choices much easier.", "/Yusuf_Ali.png"],
];

export const resources = ["Syllabus PDF", "Important Topics", "Study Planner", "Sample Mock Test"];

export const faculty = [
  ["Dr. Nisha Mehra", "Ph.D. English", "12+ years", "/Nisha_Mehra.png"],
  ["Rahul Malhotra", "M.Sc. Mathematics", "9+ years", "/Rahul_Malhotra.png"],
  ["Sana Siddiqui", "M.A. Political Science", "10+ years", "/Sana_Siddiqui.png"],
];

export const plans = [
  ["Foundation", "Rs. 4,999", ["Live classes", "Topic tests", "Study material", "Monthly counseling"]],
  ["Premium", "Rs. 5,999", ["Everything in Foundation", "Weekly mocks", "Priority doubt support", "Admission counseling"]],
];
