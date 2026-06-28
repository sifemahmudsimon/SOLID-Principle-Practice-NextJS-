import { cookies } from 'next/headers';

/**
 * Server-side cookie utilities for Next.js App Router.
 * Only works in server components, server actions, or route handlers.
 *
 * @example
 * // --- Server Component ---
 * import { CookieServerUtils } from '@/utils/CookieServerUtils';
 *
 * export default function Page() {
 *   // Get a cookie
 *   const token = CookieServerUtils.get('token');
 *
 *   // Set a cookie
 *   CookieServerUtils.set('session', 'abc123', { httpOnly: true });
 *
 *   // Delete a cookie
 *   CookieServerUtils.delete('oldCookie');
 *
 *   return <div>Token: {token}</div>;
 * }
 *
 * @example
 * // --- Route Handler / Server Action ---
 * import { CookieServerUtils } from '@/utils/CookieServerUtils';
 *
 * export async function GET() {
 *   // Get a cookie
 *   const token = CookieServerUtils.get('token');
 *
 *   // Set a cookie
 *   CookieServerUtils.set('session', 'abc123', { httpOnly: true });
 *
 *   // Delete a cookie
 *   CookieServerUtils.delete('oldCookie');
 *
 *   return new Response(JSON.stringify({ token }));
 * }
 */
export const CookieServerUtils = {
    /**
     * Get a cookie value by name
     * @param {string} name - The name of the cookie
     * @returns {string | null} The cookie value or null if not found
     * @example
     * const token = CookieServerUtils.get('token');
     */
    get: (name: string) =>
        // @ts-ignore TS2339: Property 'get' does not exist on type
        cookies().get(name)?.value ?? null,

    /**
     * Set a cookie
     * @param {string} name - The name of the cookie
     * @param {string} value - The value to store
     * @param {{ path?: string; httpOnly?: boolean }} [options] - Optional settings
     * @example
     * CookieServerUtils.set('session', 'abc123', { httpOnly: true });
     */
    set: (name: string, value: string, options?: { path?: string; httpOnly?: boolean }) =>
        // @ts-ignore TS2339: Property 'set' does not exist on type
        cookies().set({
            name,
            value,
            path: options?.path ?? '/',
            httpOnly: options?.httpOnly,
        }),

    /**
     * Delete a cookie by name
     * @param {string} name - The name of the cookie to delete
     * @example
     * CookieServerUtils.delete('oldCookie');
     */
    delete: (name: string) =>
        // @ts-ignore TS2339: Property 'set' does not exist on type
        cookies().set({ name, value: '', maxAge: 0 }),
};
