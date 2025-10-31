/**
 * Track visitor returns within 5 days using a cookie
 * @returns {boolean} true if returning visitor, false if first visit
 */
export function trackVisitor() {
  const COOKIE_NAME = "visited";
  const DAYS = 5;

  // Check if cookie exists
  const cookies = document.cookie.split("; ");
  const visitorCookie = cookies.find((row) =>
    row.startsWith(COOKIE_NAME + "=")
  );

  if (!visitorCookie) {
    // First visit - create cookie with visited=true
    const expires = new Date(Date.now() + DAYS * 86400000).toUTCString();
    document.cookie = `${COOKIE_NAME}=true; expires=${expires}; path=/; SameSite=Lax`;
    return false; // New visitor
  }

  return true; // Returning visitor (cookie visited=true exists)
}
