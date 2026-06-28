/**
 * LocalStorage / SessionStorage helper
 * Provides a simple interface to store, retrieve, and remove items from localStorage or sessionStorage.
 * By default, it uses localStorage. Pass `true` as the third argument to use sessionStorage.
 */
export const storage = {
    /**
     * Save a value in storage
     * @param {string} key - The storage key
     * @param {any} value - The value to store (will be JSON.stringified)
     * @param {boolean} [useSession=false] - If true, use sessionStorage instead of localStorage
     * @example
     * // Save to localStorage (default)
     * storage.set('user', {name: 'Alice', age: 25});
     *
     * // Save to sessionStorage
     * storage.set('sessionData', {token: 'abc123'}, true);
     */
    set: (key: string, value: any, useSession = false) =>
        (useSession ? sessionStorage : localStorage).setItem(key, JSON.stringify(value)),

    /**
     * Get a value from storage
     * @param {string} key - The storage key
     * @param {boolean} [useSession=false] - If true, use sessionStorage instead of localStorage
     * @returns {any} The parsed value, or null if not found
     * @example
     * // Retrieve from localStorage
     * const user = storage.get('user'); // {name: 'Alice', age: 25}
     *
     * // Retrieve from sessionStorage
     * const sessionData = storage.get('sessionData', true); // {token: 'abc123'}
     */
    get: (key: string, useSession = false) => {
        const item = (useSession ? sessionStorage : localStorage).getItem(key);
        return item ? JSON.parse(item) : null;
    },

    /**
     * Remove a value from storage
     * @param {string} key - The storage key
     * @param {boolean} [useSession=false] - If true, use sessionStorage instead of localStorage
     * @example
     * // Remove from localStorage
     * storage.remove('user');
     *
     * // Remove from sessionStorage
     * storage.remove('sessionData', true);
     */
    remove: (key: string, useSession = false) =>
        (useSession ? sessionStorage : localStorage).removeItem(key),
};
