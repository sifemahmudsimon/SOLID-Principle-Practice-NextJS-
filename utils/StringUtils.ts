/**
 * String utilities
 * Provides common string manipulation methods: capitalize, truncate, kebab-case conversion.
 */
export const StringUtils = {
    /**
     * Capitalize the first letter of a string.
     * @param {string} str - The string to capitalize.
     * @returns {string} The string with the first letter capitalized.
     * @example
     * StringUtils.capitalize('hello world') // "Hello world"
     * StringUtils.capitalize('react') // "React"
     */
    capitalize: (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1),

    /**
     * Truncate a string to a specified length and add ellipsis (…) if truncated.
     * @param {string} str - The string to truncate.
     * @param {number} length - Maximum allowed length.
     * @returns {string} The truncated string with ellipsis if it exceeds the length.
     * @example
     * StringUtils.truncate('Hello World', 5) // "Hello…"
     * StringUtils.truncate('Short', 10) // "Short"
     */
    truncate: (str: string, length: number) =>
        str.length > length ? str.slice(0, length) + '…' : str,

    /**
     * Convert a string to kebab-case (lowercase words separated by hyphens).
     * @param {string} str - The string to convert.
     * @returns {string} The kebab-case version of the string.
     * @example
     * StringUtils.kebabCase('Hello World') // "hello-world"
     * StringUtils.kebabCase('myVariableName') // "my-variable-name"
     */
    kebabCase: (str: string) =>
        str
            .replace(/\s+/g, '-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase(),
};
