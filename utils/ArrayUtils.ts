/**
 * Array utilities
 * Common operations for arrays
 *
 * Real-life use cases:
 * - Cleaning data → compact, unique, remove, uniqueBy
 * - Organizing/grouping data → chunk, groupBy, sortBy
 * - Comparing datasets → intersection, difference
 * - Pagination or randomization → chunk, shuffle
 * - Extracting important elements → first, last, max, min, sum
 */
export const ArrayUtils = {
    /**
     * Remove duplicates from an array
     * @param {T[]} items
     * @returns {T[]}
     * @example
     * const ids = [1,2,2,3];
     * ArrayUtils.unique(ids); // [1,2,3]
     */
    unique: <T>(items: T[]): T[] => Array.from(new Set(items)),

    /**
     * Remove duplicates from an array based on a key or function
     * @param {T[]} items - Array of items
     * @param {(item: T) => any} getKey - Function to compute uniqueness key
     * @returns {T[]} Array with unique items
     * @example
     * const products = [
     *   { sku: 'A123', name: 'Shirt' },
     *   { sku: 'B456', name: 'Pants' },
     *   { sku: 'A123', name: 'Shirt' }
     * ];
     * ArrayUtils.uniqueBy(products, product => product.sku);
     * // [{sku:'A123',name:'Shirt'},{sku:'B456',name:'Pants'}]
     */
    uniqueBy: <T>(items: T[], getKey: (item: T) => any): T[] => {
        const seenKeys = new Set();
        return items.filter(item => {
            const key = getKey(item);
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
            return true;
        });
    },

    /**
     * Flatten a nested array by a specified depth
     * @param {any[]} items - Array to flatten
     * @param {number} [depth=1] - Number of levels to flatten
     * @returns {any[]} Flattened array
     * @example
     * const categories = ['Books', ['Fiction','Non-fiction'], ['Science',['Physics']]];
     * ArrayUtils.flatten(categories, 1); // ['Books','Fiction','Non-fiction','Science',['Physics']]
     * ArrayUtils.flatten(categories, 2); // ['Books','Fiction','Non-fiction','Science','Physics']
     */
    flatten: (items: any[], depth: number = 1): any[] => items.flat(depth),

    /**
     * Chunk an array into smaller arrays
     * @param {T[]} items - Array to split
     * @param {number} chunkSize - Size of each chunk
     * @returns {T[][]} Array of chunks
     * @example
     * const numbers = [1,2,3,4,5,6,7,8];
     * ArrayUtils.chunk(numbers, 3); // [[1,2,3],[4,5,6],[7,8]]
     */
    chunk: <T>(items: T[], chunkSize: number): T[][] => {
        const chunks: T[][] = [];
        for (let index = 0; index < items.length; index += chunkSize) {
            const chunk = items.slice(index, index + chunkSize);
            chunks.push(chunk);
        }
        return chunks;
    },

    /**
     * Shuffle an array randomly
     * @param {T[]} items - Array to shuffle
     * @returns {T[]} Shuffled array
     * @example
     * const cards = ['A','B','C','D'];
     * ArrayUtils.shuffle(cards); // ['C','A','D','B']
     */
    shuffle: <T>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5),

    /**
     * Sum all numbers in an array
     * @param {number[]} numbers
     * @returns {number} Sum of all numbers
     * @example
     * const prices = [12.5, 7.5, 10];
     * ArrayUtils.sum(prices); // 30
     */
    sum: (numbers: number[]): number => numbers.reduce((total, number) => total + number, 0),

    /**
     * Sum an array of objects by a numeric key or function
     * @param {T[]} items - Array of objects
     * @param {(item: T) => number} getValue - Function to extract the number to sum
     * @returns {number} Sum of extracted values
     *
     * @example
     * const orders = [{price:10}, {price:20}, {price:15}];
     * ArrayUtils.sumBy(orders, o => o.price);
     * // Output: 45
     */
    sumBy: <T>(items: T[], getValue: (item: T) => number): number =>
        items.reduce((total, item) => total + (getValue(item) || 0), 0),

    /**
     * Find intersection of two arrays, optionally by key function
     * @param {T[]} firstArray - First array
     * @param {T[]} secondArray - Second array
     * @param {(item: T) => any} [getKey] - Optional function to extract key for comparison
     * @returns {T[]} Array of common elements
     * @example
     * // Primitives
     * const userRoles = ['admin','editor'];
     * ArrayUtils.intersection(userRoles, ['editor','viewer']); // ['editor']
     *
     * @example
     * // Objects by key
     * const usersA = [{id:1,name:'Alice'},{id:2,name:'Bob'}];
     * const usersB = [{id:2,name:'Bob'}];
     * ArrayUtils.intersection(usersA, usersB, user => user.id);
     * // [{id:2,name:'Bob'}]
     */
    intersection: <T>(
        firstArray: T[],
        secondArray: T[],
        getKey?: (item: T) => any
    ): T[] => {
        if (getKey) {
            const keysInSecond = new Set(secondArray.map(getKey));
            return firstArray.filter(item => keysInSecond.has(getKey(item)));
        } else {
            return firstArray.filter(item => secondArray.includes(item));
        }
    },

    /**
     * Find difference of two arrays, optionally by key function
     * @param {T[]} firstArray - Array to filter from
     * @param {T[]} secondArray - Array to compare against
     * @param {(item: T) => any} [getKey] - Optional function to extract key for comparison
     * @returns {T[]} Items in firstArray not in secondArray
     * @example
     * // Primitives
     * const allTags = ['new','sale','old'];
     * const activeTags = ['new','sale'];
     * ArrayUtils.difference(allTags, activeTags); // ['old']
     *
     * @example
     * // Objects by key
     * const ordersA = [{id:1},{id:2},{id:3}];
     * const ordersB = [{id:2}];
     * ArrayUtils.difference(ordersA, ordersB, order => order.id);
     * // [{id:1},{id:3}]
     */
    difference: <T>(
        firstArray: T[],
        secondArray: T[],
        getKey?: (item: T) => any
    ): T[] => {
        if (getKey) {
            const keysInSecond = new Set(secondArray.map(getKey));
            return firstArray.filter(item => !keysInSecond.has(getKey(item)));
        } else {
            return firstArray.filter(item => !secondArray.includes(item));
        }
    },


    /**
     * Group array of objects by a single key or computed function
     *
     * @param {T[]} items - Array of objects
     * @param {keyof T | ((item:T)=>any)} key - Key or function to group by
     * @returns {Record<string, T[]>}
     *
     * @example
     * // 1️⃣ Group by single key
     * const orders = [
     *   { id: 1, status: 'pending' },
     *   { id: 2, status: 'completed' },
     *   { id: 3, status: 'pending' }
     * ];
     *
     * ArrayUtils.groupBy(orders, 'status');
     * // {
     * //   pending: [{ id: 1, status: 'pending' }, { id: 3, status: 'pending' }],
     * //   completed: [{ id: 2, status: 'completed' }]
     * // }
     *
     * @example
     * // 2️⃣ Group using computed function
     * const products = [
     *   { id: 1, price: 120 },
     *   { id: 2, price: 80 },
     *   { id: 3, price: 40 }
     * ];
     *
     * ArrayUtils.groupBy(products, p =>
     *   p.price >= 100 ? 'expensive' : 'cheap'
     * );
     * // {
     * //   expensive: [{ id: 1, price: 120 }],
     * //   cheap: [{ id: 2, price: 80 }, { id: 3, price: 40 }]
     * // }
     */
    groupBy: <T>(
        items: T[],
        key: keyof T | ((item: T) => any)
    ): Record<string, T[]> =>
        items.reduce((groups, item) => {

            const groupKey =
                typeof key === 'function'
                    ? String(key(item))
                    : String(item[key]);

            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }

            groups[groupKey].push(item);
            return groups;

        }, {} as Record<string, T[]>),

    /**
     * Group array by multiple keys (nested grouping)
     *
     * @param {T[]} items - Array of objects
     * @param {(keyof T | ((item:T)=>any))[]} keys - Keys or functions
     * @returns {any} Nested grouped object
     *
     * @example
     * // 3️⃣ Group by multiple keys (nested)
     * const orders = [
     *   { id: 1, status: 'pending', user: 'Alice', amount: 120 },
     *   { id: 2, status: 'completed', user: 'Bob', amount: 90 },
     *   { id: 3, status: 'pending', user: 'Alice', amount: 50 },
     *   { id: 4, status: 'pending', user: 'Bob', amount: 200 }
     * ];
     *
     * ArrayUtils.groupByMultiple(orders, ['status', 'user']);
     *
     * // {
     * //   pending: {
     * //     Alice: [
     * //       { id: 1, status: 'pending', user: 'Alice', amount: 120 },
     * //       { id: 3, status: 'pending', user: 'Alice', amount: 50 }
     * //     ],
     * //     Bob: [{ id: 4, status: 'pending', user: 'Bob', amount: 200 }]
     * //   },
     * //   completed: {
     * //     Bob: [{ id: 2, status: 'completed', user: 'Bob', amount: 90 }]
     * //   }
     * // }
     *
     * @example
     * // 4️⃣ Group using computed function inside nesting
     * ArrayUtils.groupByMultiple(orders, [
     *   'status',
     *   order => order.amount >= 100 ? 'high' : 'low'
     * ]);
     *
     * // {
     * //   pending: {
     * //     high: [
     * //       { id: 1, status: 'pending', user: 'Alice', amount: 120 },
     * //       { id: 4, status: 'pending', user: 'Bob', amount: 200 }
     * //     ],
     * //     low: [{ id: 3, status: 'pending', user: 'Alice', amount: 50 }]
     * //   },
     * //   completed: {
     * //     low: [{ id: 2, status: 'completed', user: 'Bob', amount: 90 }]
     * //   }
     * // }
     *
     * @example
     * // 5️⃣ Group only by computed functions
     * ArrayUtils.groupByMultiple(orders, [
     *   order => order.amount >= 100 ? 'high' : 'low',
     *   order => order.user
     * ]);
     *
     * // {
     * //   high: {
     * //     Alice: [{ id: 1, status: 'pending', user: 'Alice', amount: 120 }],
     * //     Bob: [{ id: 4, status: 'pending', user: 'Bob', amount: 200 }]
     * //   },
     * //   low: { Alice: [{ id: 3, status: 'pending', user: 'Alice', amount: 50 }],
     * //     Bob: [{ id: 2, status: 'completed', user: 'Bob', amount: 90 }]
     * //   }
     * // }
     */

    groupByMultiple: <T>(
        items: T[],
        keys: (keyof T | ((item: T) => any))[]
    ): any => {

        if (!keys.length) return items;

        const [currentKey, ...remainingKeys] = keys;

        const grouped = items.reduce((groups: Record<string, T[]>, item) => {

            const groupKey =
                typeof currentKey === 'function'
                    ? String(currentKey(item))
                    : String(item[currentKey]);

            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }

            groups[groupKey].push(item);
            return groups;

        }, {} as Record<string, T[]>);

        if (!remainingKeys.length) return grouped;

        Object.keys(grouped).forEach(key => {
            grouped[key] = ArrayUtils.groupByMultiple(
                grouped[key],
                remainingKeys
            );
        });

        return grouped;
    },


    /**
     * Sort array by a function
     *
     * @param {T[]} items - Array to sort
     * @param {(item:T)=>any} getSortValue - Function to get sort value
     * @param {'asc'|'desc'} [order='asc'] - Sort order
     * @returns {T[]} Sorted array
     *
     * @example
     * // 1️⃣ Simple ascending sort
     * const products = [
     *   { name: 'A', price: 30 },
     *   { name: 'B', price: 10 },
     *   { name: 'C', price: 20 }
     * ];
     *
     * ArrayUtils.sortBy(products, p => p.price);
     * // [{ name: 'B', price: 10 }, { name: 'C', price: 20 }, { name: 'A', price: 30 }]
     *
     * @example
     * // 2️⃣ Descending sort
     * ArrayUtils.sortBy(products, p => p.price, 'desc');
     * // [{ name: 'A', price: 30 }, { name: 'C', price: 20 }, { name: 'B', price: 10 }]
     *
     * @example
     * // 3️⃣ Sort by string alphabetically
     * const users = [
     *   { name: 'Charlie' },
     *   { name: 'Alice' },
     *   { name: 'Bob' }
     * ];
     *
     * ArrayUtils.sortBy(users, u => u.name);
     * // [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
     */
    sortBy: <T>(
        items: T[],
        getSortValue: (item: T) => any,
        order: 'asc' | 'desc' = 'asc'
    ): T[] =>
        [...items].sort((firstItem, secondItem) => {
            const firstValue = getSortValue(firstItem);
            const secondValue = getSortValue(secondItem);

            if (firstValue === secondValue) return 0;

            const result = firstValue > secondValue ? 1 : -1;
            return order === 'desc' ? -result : result;
        }),

    /**
     * Sort array by multiple keys (multi-level sorting)
     *
     * @param {T[]} items - Array to sort
     * @param {{ key: (item:T)=>any; order?: 'asc'|'desc' }[]} sorters - List of sorters
     * @returns {T[]} Sorted array
     *
     * @example
     * // 5️⃣ Multi-level sorting by price ascending then name descending
     * const products = [
     *   { name: 'A', price: 30 },
     *   { name: 'B', price: 10 },
     *   { name: 'C', price: 30 },
     *   { name: 'D', price: 20 }
     * ];
     *
     * ArrayUtils.sortByMultiple(products, [
     *   { key: p => p.price },
     *   { key: p => p.name, order: 'desc' }
     * ]);
     *
     * // [
     * //   { name: 'B', price: 10 },
     * //   { name: 'D', price: 20 },
     * //   { name: 'C', price: 30 },
     * //   { name: 'A', price: 30 }
     * // ]
     */
    sortByMultiple: <T>(
        items: T[],
        sorters: { key: (item: T) => any; order?: 'asc' | 'desc' }[]
    ): T[] =>
        [...items].sort((a, b) => {
            for (const sorter of sorters) {
                const aVal = sorter.key(a);
                const bVal = sorter.key(b);

                if (aVal === bVal) continue;

                const result = aVal > bVal ? 1 : -1;
                return sorter.order === 'desc' ? -result : result;
            }
            return 0;
        }),



    /**
     * Remove item(s) from array by value
     * @param {T[]} items - Array to filter
     * @param {T} valueToRemove - Value to remove
     * @returns {T[]} Array without the removed value
     * @example
     * const tags = ['new','sale','old'];
     * ArrayUtils.remove(tags,'old'); // ['new','sale']
     */
    remove: <T>(items: T[], valueToRemove: T): T[] =>
        items.filter(item => item !== valueToRemove),
};
