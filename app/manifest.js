export default function manifest() {
  return {
    name: "Padae Partner",
    short_name: "Padae Partner",
    description:
      "CUET UG coaching, exam guides, study strategies, and practical preparation insights for students.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf8",
    theme_color: "#10212b",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
