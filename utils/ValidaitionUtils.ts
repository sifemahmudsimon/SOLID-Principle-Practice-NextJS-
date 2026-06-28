/**
 * Validation utilities
 * Provides common validation methods for strings, emails, phone numbers, and general values.
 */
export const Validators = {
    /**
     * Check if a string is a valid email.
     * @param {string} email - The email string to validate
     * @returns {boolean} True if valid email, false otherwise
     * @example
     * Validators.isEmail('alice@example.com') // true
     * Validators.isEmail('alice.com') // false
     */
    isEmail: (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

    /**
     * Check if a string is a valid phone number.
     * Accepts numbers with optional "+" and 7-15 digits.
     * @param {string} phone - The phone number string
     * @returns {boolean} True if valid phone number, false otherwise
     * @example
     * Validators.isPhoneNumber('+8801712345678') // true
     * Validators.isPhoneNumber('12345') // false
     */
    isPhoneNumber: (phone: string) =>
        /^\+?\d{7,15}$/.test(phone),

    /**
     * Check if a password is strong.
     * Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char.
     * @param {string} password
     * @returns {boolean}
     * @example
     * Validators.isStrongPassword('Abc123!@') // true
     * Validators.isStrongPassword('password') // false
     */
    isStrongPassword: (password: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password),

    /**
     * Check if a string contains only numbers.
     * @param {string} value
     * @returns {boolean}
     * @example
     * Validators.isNumber('12345') // true
     * Validators.isNumber('123a') // false
     */
    isNumber: (value: string) => /^\d+$/.test(value),

    /**
     * Check if a string contains only letters (a-z, A-Z).
     * @param {string} value
     * @returns {boolean}
     * @example
     * Validators.isAlpha('Hello') // true
     * Validators.isAlpha('Hello123') // false
     */
    isAlpha: (value: string) => /^[A-Za-z]+$/.test(value),

    /**
     * Check if a string contains only letters or numbers.
     * @param {string} value
     * @returns {boolean}
     * @example
     * Validators.isAlphanumeric('Hello123') // true
     * Validators.isAlphanumeric('Hello 123') // false
     */
    isAlphanumeric: (value: string) => /^[A-Za-z0-9]+$/.test(value),


    /**
     * Check if a value is empty (null, undefined, or empty string).
     * @param {any} value - The value to check
     * @returns {boolean} True if empty, false otherwise
     * @example
     * Validators.isEmpty('') // true
     * Validators.isEmpty(null) // true
     * Validators.isEmpty('Hello') // false
     */
    isEmpty: (value: any) =>
        value === null || value === undefined || value === '',

    /**
     * Check if a string meets a minimum length.
     * @param {string} value - The string to check
     * @param {number} length - Minimum required length
     * @returns {boolean} True if string length >= min length
     * @example
     * Validators.minLength('Hello', 3) // true
     * Validators.minLength('Hi', 3) // false
     */
    minLength: (value: string, length: number) =>
        value.length >= length,

    /**
     * Check if a string does not exceed a maximum length.
     * @param {string} value - The string to check
     * @param {number} length - Maximum allowed length
     * @returns {boolean} True if string length <= max length
     * @example
     * Validators.maxLength('Hello', 10) // true
     * Validators.maxLength('Hello World', 5) // false
     */
    maxLength: (value: string, length: number) =>
        value.length <= length,
};
