/**
 * Client-side cookie utilities.
 *
 * Safe to import in both SSR and CSR.
 * Cookie operations are executed only when running in the browser.
 */
export const CookieUtils = {
  /**
   * Set a cookie in the browser.
   *
   * @param {string} name - Cookie name.
   * @param {string} value - Cookie value.
   * @param {number} [days] - Expiration in days.
   * @param {string} [path='/'] - Cookie path.
   */
  set: (name: string, value: string, days?: number, path = "/") => {
    if (typeof document === "undefined") return;

    let expires = "";

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${encodeURIComponent(
      value
    )}${expires}; path=${path}`;
  },

  /**
   * Get a cookie value by name.
   *
   * Returns `null` when executed outside the browser.
   *
   * @param {string} name - Cookie name.
   * @returns {string | null}
   */
  get: (name: string): string | null => {
    if (typeof document === "undefined") return null;

    const nameEQ = `${name}=`;

    for (let cookie of document.cookie.split(";")) {
      cookie = cookie.trim();

      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }

    return null;
  },

  /**
   * Delete a cookie by name.
   *
   * @param {string} name - Cookie name.
   * @param {string} [path='/'] - Cookie path.
   */
  delete: (name: string, path = "/") => {
    if (typeof document === "undefined") return;

    document.cookie = `${name}=; Max-Age=0; path=${path}`;
  },
};
