"use client";

import { useEffect } from "react";
import { captureGclid } from "@/lib/gclid";

// Captures the Google Ads click id from the landing URL once, site-wide.
// Renders nothing.
export default function GclidCapture() {
  useEffect(() => {
    captureGclid();
  }, []);

  return null;
}
