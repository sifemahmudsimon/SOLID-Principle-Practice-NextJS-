/**
 * Math utilities
 * Provides common math functions like random numbers, clamping, rounding, and more.
 */
export const MathUtils = {
    /**
     * Generate a random integer between min and max (inclusive).
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} A random integer between min and max
     * @example
     * MathUtils.randomInt(1, 10) // 3 (random value between 1 and 10)
     */
    randomInt: (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min,

    /**
     * Generate a random float between min and max
     * @param {number} min
     * @param {number} max
     * @param {number} [decimals=2] - Decimal places
     * @returns {number} Random float
     * @example
     * MathUtils.randomFloat(1, 5) // 3.42
     */
    randomFloat: (min: number, max: number, decimals = 2) =>
        Math.round((Math.random() * (max - min) + min) * 10 ** decimals) /
        10 ** decimals,

    /**
     * Clamp a number between a minimum and maximum value.
     * @param {number} value - The number to clamp
     * @param {number} min - Minimum allowed value
     * @param {number} max - Maximum allowed value
     * @returns {number} The clamped value
     * @example
     * MathUtils.clamp(5, 1, 10) // 5
     * MathUtils.clamp(-2, 0, 10) // 0
     * MathUtils.clamp(15, 0, 10) // 10
     */
    clamp: (value: number, min: number, max: number) =>
        Math.min(Math.max(value, min), max),

    /**
     * Round a number to a specific number of decimal places.
     * @param {number} num - The number to round
     * @param {number} [decimals=2] - Number of decimal places
     * @returns {number} Rounded number
     * @example
     * MathUtils.round(3.14159) // 3.14
     * MathUtils.round(3.14159, 3) // 3.142
     */
    round: (num: number, decimals = 2) =>
        Math.round(num * 10 ** decimals) / 10 ** decimals,

    /**
     * Sum all numbers in an array.
     * @param {number[]} numbers
     * @returns {number} Sum of numbers
     * @example
     * MathUtils.sum([1, 2, 3, 4]) // 10
     */
    sum: (numbers: number[]) => numbers.reduce((acc, val) => acc + val, 0),

    /**
     * Calculate the average of numbers in an array.
     * @param {number[]} numbers
     * @returns {number} Average value
     * @example
     * MathUtils.average([1, 2, 3, 4]) // 2.5
     */
    average: (numbers: number[]) =>
        numbers.length ? MathUtils.sum(numbers) / numbers.length : 0,

    /**
     * Calculate factorial of a number.
     * @param {number} n
     * @returns {number} n!
     * @example
     * MathUtils.factorial(5) // 120
     */
    factorial: (n: number): number =>
        n <= 1 ? 1 : n * MathUtils.factorial(n - 1),

    /**
     * Calculate percentage of value.
     * @param {number} value - Part
     * @param {number} total - Whole
     * @returns {number} Percentage value
     * @example
     * MathUtils.percent(50, 200) // 25
     */
    percent: (value: number, total: number) => (value / total) * 100,

    /**
     * Convert degrees to radians
     * @param {number} degrees
     * @returns {number} Radians
     * @example
     * MathUtils.degreesToRadians(180) // 3.14159
     */
    degreesToRadians: (degrees: number) => (degrees * Math.PI) / 180,

    /**
     * Convert radians to degrees
     * @param {number} radians
     * @returns {number} Degrees
     * @example
     * MathUtils.radiansToDegrees(Math.PI) // 180
     */
    radiansToDegrees: (radians: number) => (radians * 180) / Math.PI,
};
