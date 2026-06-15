// Google Ads click-id capture & persistence.
//
// When a user lands from a Google Ad the URL carries a `gclid` (or `wbraid` /
// `gbraid` on iOS). That value is only present on the landing URL — it is lost
// as soon as the user navigates to another page. We persist it (cookie +
// localStorage) so it is still available when the user later submits a form or
// taps the WhatsApp / call buttons, possibly on a different page.

const STORAGE_KEY = "pp_gclid";
// Google Ads default click-to-conversion window is 90 days.
const MAX_AGE_DAYS = 90;
const MAX_AGE_MS = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

function readFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("gclid") || params.get("wbraid") || params.get("gbraid") || null;
}

// Run once per landing (client only). Reads the click id from the URL and
// stores it so it persists across pages and sessions.
export function captureGclid() {
  if (typeof window === "undefined") {
    return;
  }

  const gclid = readFromUrl();
  if (!gclid) {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: gclid, ts: Date.now() }));
  } catch {
    // localStorage can be unavailable (private mode); the cookie still covers us.
  }

  document.cookie =
    `${STORAGE_KEY}=${encodeURIComponent(gclid)}; max-age=${MAX_AGE_DAYS * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Returns the best-known gclid for this visitor, or null. Prefers a fresh value
// in the current URL, then localStorage, then the cookie.
export function getStoredGclid() {
  if (typeof window === "undefined") {
    return null;
  }

  const fromUrl = readFromUrl();
  if (fromUrl) {
    return fromUrl;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const record = JSON.parse(raw);
      if (record?.value && Date.now() - (record.ts || 0) < MAX_AGE_MS) {
        return record.value;
      }
    }
  } catch {
    // ignore and fall through to the cookie
  }

  const match = document.cookie.match(/(?:^|;\s*)pp_gclid=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}
