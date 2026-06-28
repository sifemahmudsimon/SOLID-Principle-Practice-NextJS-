import { create } from "zustand";


/**
 * @typedef {Object} UserState
 * @property {string|null} user - The current user's name. `null` if not logged in.
 * @property {(value: string|null) => void} setUser - Function to update the current user.
 */

/**
 * Zustand store for managing user state.
 *
 * Provides:
 * - React hook access to state (`useUserStore((state) => state.user)`)
 * - Custom setter (`setUser`) to update user inside or outside React components
 *
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<UserState>>}
 *
 * @example
 * import { useUserStore } from './path/to/store';
 *
 * // 1️⃣ React component usage
 * function Profile() {
 *   const user = useUserStore((state) => state.user);
 *   const setUser = useUserStore((state) => state.setUser);
 *
 *   return (
 *     <div>
 *       <p>User: {user ?? 'Guest'}</p>
 *       <button onClick={() => setUser('Simon')}>Login as Simon</button>
 *     </div>
 *   );
 * }
 *
 * // 2️⃣ Outside React components
 * useUserStore.getState().setUser("Simon");
 * console.log(useUserStore.getState().user); // "Simon"
 */
export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (value) => set({ user: value }),
}));


type UserState = {
    user: string | null;
    setUser: (value: string | null) => void;
};
