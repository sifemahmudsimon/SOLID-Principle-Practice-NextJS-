import { create } from "zustand";

/**
 * Zustand store for managing user information.
 *
 * Provides:
 * - React hook access to state
 * - `setState` to update state outside React components
 * - `getState` to read state outside React components
 *
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<UserState>>}
 *
 * @example
 * import { userStore } from './store';
 *
 * // 1️⃣ React component usage
 * function Profile() {
 *   const user = userStore((state) => state.user);
 *   return <p>User: {user ?? 'Guest'}</p>;
 * }
 *
 * // 2️⃣ Update outside component
 * userStore.setState({ user: "Simon" });
 *
 * // 3️⃣ Read outside component
 * console.log(userStore.getState().user); // "Simon"
 */
export const userStore = create<UserState>((set) => ({
    user: null,
    contact:null
}));

type UserState = {
    user: string | null;
    contact: string | number | null;
};