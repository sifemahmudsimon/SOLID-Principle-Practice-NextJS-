/**
 * Client-side cookie utilities
 * Works only in the browser (React components, hooks)
 */
export const CookieUtils = {
    /**
     * Set a cookie in the browser
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} [days] - Expiration in days (optional)
     * @param {string} [path='/'] - Cookie path
     * @example
     * // Set a cookie for 7 days
     * CookieUtils.set('token', 'abc123', 7);
     */
    set: (name: string, value: string, days?: number, path = '/') => {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = `${name}=${encodeURIComponent(value || '')}${expires}; path=${path}`;
    },

    /**
     * Get a cookie value by name
     * @param {string} name - Cookie name
     * @returns {string | null} Cookie value or null if not found
     * @example
     * const token = CookieUtils.get('token');
     */
    get: (name: string): string | null => {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let c of ca) {
            c = c.trim();
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
        }
        return null;
    },

    /**
     * Delete a cookie by name
     * @param {string} name - Cookie name
     * @param {string} [path='/'] - Cookie path
     * @example
     * CookieUtils.delete('token');
     */
    delete: (name: string, path = '/') => {
        document.cookie = `${name}=; Max-Age=-99999999; path=${path}`;
    },
};
