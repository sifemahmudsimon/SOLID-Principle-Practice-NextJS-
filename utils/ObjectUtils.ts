/**
 * Object utilities
 */
export const ObjectUtils = {
    /**
     * Deep clone an object or array.
     * Creates a new object/array with the same structure and values.
     * Nested objects and arrays are fully copied, so changes to the clone
     * do not affect the original.
     *
     * ⚠️ Note:
     * - Does **not** clone functions, `undefined`, `Symbol`, or non-JSON data.
     * - Works best for plain objects and arrays.
     *
     * @param {any} obj - Object or array to clone
     * @returns {any} Deep cloned object or array
     * @example
     * // Real-life: clone user profile for editing without mutating original
     * const userProfile = {
     *   id: 101,
     *   name: 'Alice',
     *   settings: { theme: 'dark', notifications: true },
     *   orders: [{ id: 1, total: 50 }, { id: 2, total: 100 }]
     * };
     * const editableProfile = ObjectUtils.deepClone(userProfile);
     * editableProfile.name = 'Alice Updated';
     * editableProfile.settings.theme = 'light';
     * editableProfile.orders[0].total = 75;
     *
     * console.log(userProfile);
     * // Output:
     * // {
     * //   id: 101,
     * //   name: 'Alice',
     * //   settings: { theme: 'dark', notifications: true },
     * //   orders: [ { id: 1, total: 50 }, { id: 2, total: 100 } ]
     * // }
     *
     * console.log(editableProfile);
     * // Output:
     * // {
     * //   id: 101,
     * //   name: 'Alice Updated',
     * //   settings: { theme: 'light', notifications: true },
     * //   orders: [ { id: 1, total: 75 }, { id: 2, total: 100 } ]
     * // }
     */
    deepClone: (obj: any) => JSON.parse(JSON.stringify(obj)),


    /**
     * Merge multiple objects into a single object.
     * Later objects overwrite properties of earlier objects if keys collide.
     * Does a shallow merge (nested objects are not deeply merged).
     *
     * @param {...object[]} objs - Objects to merge
     * @returns {object} Merged object
     * @example
     * // Real-life: merging API defaults and user settings
     * const defaultSettings = { theme: 'light', notifications: true };
     * const userSettings = { theme: 'dark', notifications: false };
     * const finalSettings = ObjectUtils.merge(defaultSettings, userSettings);
     *
     * console.log(finalSettings);
     * // Output:
     * // { theme: 'dark', notifications: false }
     *
     * @example
     * // Merging multiple objects
     * const obj1 = { a: 1 };
     * const obj2 = { b: 2 };
     * const obj3 = { c: 3, a: 5 };
     * ObjectUtils.merge(obj1, obj2, obj3);
     * // Output: { a: 5, b: 2, c: 3 }
     */
    merge: (...objs: object[]) => Object.assign({}, ...objs),


    /**
     * Check if object is empty
     * @param {object} obj
     * @returns {boolean}
     * @example
     * ObjectUtils.isEmpty({}) // true
     * ObjectUtils.isEmpty({a:1}) // false
     */
    isEmpty: (obj: object) => Object.keys(obj).length === 0,

    /**
     * Sum all numeric values in an object
     * @param {Record<string, number>} obj - Object with numeric values
     * @returns {number} Sum of all values
     *
     * @example
     * const orders = { profile: 10, delivery: 20, hiddencharge: 10 };
     * ObjectUtils.sumValues(orders);
     * // Output: 40
     *
     * @example
     * const fees = { service: 15, tax: 5 };
     * ObjectUtils.sumValues(fees);
     * // Output: 20
     */
    sumNumberValues: (obj: Record<string, number>): number =>
        Object.values(obj).reduce((total, value) => total + value, 0),
    /**
     * Calculate all numeric values in an object, converting numeric strings automatically
     * @param {Record<string, any>} obj - Object with numeric values or numeric strings
     * @returns {number} Sum of all numeric values
     *
     * @example
     * const orders = { profile: '10', delivery: '20', discount: '-20' };
     * ObjectUtils.calculateStringValues(orders);
     * // Output: 10  (10 + 20 - 20)
     *
     * @example
     * const fees = { service: '15', tax: 5, note: 'abc' };
     * ObjectUtils.calculateStringValues(fees);
     * // Output: 20  (ignores 'abc')
     */
    calculateStringValues: (obj: Record<string, any>): number =>
        Object.values(obj).reduce((total, value) => {
            const num = Number(value);
            return total + (isNaN(num) ? 0 : num);
        }, 0),

    /**
     * Pick specific keys from an object
     * @param {object} obj - Source object
     * @param {string[]} keys - Keys to pick
     * @returns {object} New object with only picked keys
     *
     * @example
     * const user = { id: 1, name: 'Alice', email: 'alice@test.com' };
     * ObjectUtils.pick(user, ['id', 'name']);
     * // Output: { id: 1, name: 'Alice' }
     */
    pick: (obj: Record<string, any>, keys: string[]): Record<string, any> =>
        keys.reduce((result: Record<string, any>, key) => {
            if (key in obj) result[key] = obj[key];
            return result;
        }, {}),

    /**
     * Keep only the properties of an object that satisfy a condition
     * @param obj
     * @param predicate
     * @example
     * // 1️⃣ Pick numeric values from an object
     * const scores = { alice: 10, bob: 'N/A', carol: 15 };
     * const numericScores = ObjectUtils.pickBy(scores, (value) => typeof value === 'number');
     * console.log(numericScores);
     * // Output: { alice: 10, carol: 15 }
     *
     * @example
     * // 2️⃣ Pick only public fields
     * const user = { id: 1, name: 'Bob', password: 'secret', token: 'abcd' };
     * const publicData = ObjectUtils.pickBy(user, (value, key) => !['password','token'].includes(key));
     * console.log(publicData);
     * // Output: { id: 1, name: 'Bob' }
     */
    pickBy: (obj: Record<string, any>, predicate: (value: any, key: string) => boolean) =>
        Object.fromEntries(Object.entries(obj).filter(([k, v]) => predicate(v, k))),

    /**
     * Omit specific keys from an object
     * @param {object} obj - Source object
     * @param {string[]} keys - Keys to remove
     * @returns {object} New object without omitted keys
     *
     * @example
     * const user = { id: 1, name: 'Alice', password: 'secret' };
     * ObjectUtils.omit(user, ['password']);
     * // Output: { id: 1, name: 'Alice' }
     */
    omit: (obj: Record<string, any>, keys: string[]): Record<string, any> =>
        Object.keys(obj).reduce((result: Record<string, any>, key) => {
            if (!keys.includes(key)) result[key] = obj[key];
            return result;
        }, {}),

    /**
     * Remove properties from an object that satisfy a condition
     * @param obj
     * @param predicate
     *
     * @example
     * // 1️⃣ Omit null or undefined values from API response
     * const apiResponse = { id: 1, name: 'Alice', email: null, phone: undefined };
     * const cleaned = ObjectUtils.omitBy(apiResponse, (value) => value == null);
     * console.log(cleaned);
     * // Output: { id: 1, name: 'Alice' }
     *
     * @example
     * // 2️⃣ Omit fields marked as private
     * const user = { id: 1, name: 'Bob', password: 'secret', token: 'abcd' };
     * const publicData = ObjectUtils.omitBy(user, (value, key) => ['password','token'].includes(key));
     * console.log(publicData);
     * // Output: { id: 1, name: 'Bob' }
     */
    omitBy: (obj: Record<string, any>, predicate: (value: any, key: string) => boolean) =>
        Object.fromEntries(Object.entries(obj).filter(([k, v]) => !predicate(v, k))),
    /**
     * Invert keys and values of an object
     * @param {object} obj - Source object
     * @returns {object} Object with keys and values swapped
     *
     * @example
     * const roles = { admin: 1, editor: 2, viewer: 3 };
     * ObjectUtils.invert(roles);
     * // Output: { '1': 'admin', '2': 'editor', '3': 'viewer' }
     */
    invert: (obj: Record<string, any>): Record<string, any> =>
        Object.entries(obj).reduce((acc: Record<string, any>, [key, value]) => {
            acc[String(value)] = key;
            return acc;
        }, {}),

    /**
     * @param obj
     * @param prefix
     * @example
     * const settings = { theme: { color: 'blue', font: 'Arial' }, layout: 'grid' };
     * ObjectUtils.flattenKeys(settings);
     * // Output: { 'theme.color': 'blue', 'theme.font': 'Arial', 'layout': 'grid' }
     */
    flattenKeys: (obj: Record<string, any>, prefix = ''): Record<string, any> =>
        Object.entries(obj).reduce((res, [key, value]) => {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(res, ObjectUtils.flattenKeys(value, fullKey));
            } else {
                res[fullKey] = value;
            }
            return res;
        }, {} as Record<string, any>),

    /**
     * Convert a flattened object back to nested object
     * @param {object} obj - Flattened object with dot-separated keys
     * @returns {object} Nested object
     *
     * @example
     * const flat = { 'theme.color': 'blue', 'theme.font': 'Arial', 'layout': 'grid' };
     * ObjectUtils.unflattenKeys(flat);
     * // Output: { theme: { color: 'blue', font: 'Arial' }, layout: 'grid' }
     */
    unflattenKeys: (obj: Record<string, any>): Record<string, any> =>
        Object.entries(obj).reduce((res, [key, value]) => {
            const keys = key.split('.');
            keys.reduce((acc, k, idx) => {
                if (idx === keys.length - 1) acc[k] = value;
                else acc[k] = acc[k] || {};
                return acc[k];
            }, res);
            return res;
        }, {} as Record<string, any>),

};
