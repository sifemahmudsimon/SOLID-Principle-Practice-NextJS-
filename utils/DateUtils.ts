// utils/date.ts
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

/**
 * @module DateUtils
 * @description A collection of reusable date utilities using Day.js
 */
export const DateUtils = {
    /**
     * Format a date to a string.
     * @param {string | Date} date - The date to format.
     * @param {string} [formatStr='YYYY-MM-DD'] - The format string.
     * @returns {string} Formatted date.
     * @example
     * DateUtils.format(new Date(), "DD/MM/YYYY") // "16/02/2026"
     */
    format: (date: string | Date, formatStr = "YYYY-MM-DD") =>
        dayjs(date).format(formatStr),

    /**
     * Format a date as UTC string.
     * @param {string | Date} date - The date to format.
     * @param {string} [formatStr='YYYY-MM-DD HH:mm:ss'] - Format string.
     * @returns {string} UTC formatted date.
     * @example
     * DateUtils.formatUTC(new Date()) // "2026-02-16 06:30:00"
     */
    formatUTC: (date: string | Date, formatStr = "YYYY-MM-DD HH:mm:ss") =>
        dayjs(date).utc().format(formatStr),

    /**
     * Parse a date string into a Day.js object.
     * @param {string} dateStr - The date string.
     * @param {string} [formatStr='YYYY-MM-DD'] - Format string to parse.
     * @returns {dayjs.Dayjs} Day.js object.
     * @example
     * const parsed = DateUtils.parse("16/02/2026", "DD/MM/YYYY")
     */
    parse: (dateStr: string, formatStr = "YYYY-MM-DD") =>
        dayjs(dateStr, formatStr),

    /**
     * Get relative time from now.
     * @param {string | Date} date - The date to compare.
     * @returns {string} Relative time, e.g., "3 hours ago".
     * @example
     * DateUtils.fromNow("2026-02-15") // "a day ago"
     */
    fromNow: (date: string | Date) => dayjs(date).fromNow(),

    /**
     * Get relative time to now.
     * @param {string | Date} date - The date to compare.
     * @returns {string} Relative time, e.g., "in 2 days".
     * @example
     * DateUtils.toNow("2026-02-18") // "in 2 days"
     */
    toNow: (date: string | Date) => dayjs().to(dayjs(date)),

    /**
     * Check if a date is before another date.
     * @param {string | Date} date1
     * @param {string | Date} date2
     * @returns {boolean}
     * @example
     * DateUtils.isBefore("2026-02-15", "2026-02-16") // true
     */
    isBefore: (date1: string | Date, date2: string | Date) =>
        dayjs(date1).isBefore(dayjs(date2)),

    /**
     * Check if a date is after another date.
     * @param {string | Date} date1
     * @param {string | Date} date2
     * @returns {boolean}
     * @example
     * DateUtils.isAfter("2026-02-16", "2026-02-15") // true
     */
    isAfter: (date1: string | Date, date2: string | Date) =>
        dayjs(date1).isAfter(dayjs(date2)),

    /**
     * Check if two dates are the same at a given unit.
     * @param {string | Date} date1
     * @param {string | Date} date2
     * @param {dayjs.UnitType} [unit='day'] - Unit to compare, e.g., "day", "month"
     * @returns {boolean}
     * @example
     * DateUtils.isSame("2026-02-16", new Date()) // true if today
     */
    isSame: (date1: string | Date, date2: string | Date, unit: dayjs.UnitType = "day") =>
        dayjs(date1).isSame(dayjs(date2), unit),

    /**
     * Check if a date is between two other dates.
     * @param {string | Date} date
     * @param {string | Date} start
     * @param {string | Date} end
     * @returns {boolean}
     * @example
     * DateUtils.isBetween("2026-02-16", "2026-02-15", "2026-02-17") // true
     */
    isBetween: (date: string | Date, start: string | Date, end: string | Date) =>
        dayjs(date).isAfter(start) && dayjs(date).isBefore(end),

    /**
     * Create a duration object from milliseconds.
     * @param {number} milliseconds
     * @returns {dayjs.Duration}
     * @example
     * const dur = DateUtils.duration(3600000) // 1 hour
     */
    duration: (milliseconds: number) => dayjs.duration(milliseconds),

    /**
     * Humanize a duration in ms.
     * @param {number} milliseconds
     * @returns {string} Human-readable duration, e.g., "an hour"
     */
    humanizeDuration: (milliseconds: number) => dayjs.duration(milliseconds).humanize(),

    /**
     * Add time to a date.
     * @param {string | Date} date
     * @param {number} amount
     * @param {dayjs.ManipulateType} unit - "day", "month", "hour", etc.
     * @returns {dayjs.Dayjs}
     */
    add: (date: string | Date, amount: number, unit: dayjs.ManipulateType) =>
        dayjs(date).add(amount, unit),

    /**
     * Subtract time from a date.
     * @param {string | Date} date
     * @param {number} amount
     * @param {dayjs.ManipulateType} unit - "day", "month", "hour", etc.
     * @returns {dayjs.Dayjs}
     */
    subtract: (date: string | Date, amount: number, unit: dayjs.ManipulateType) =>
        dayjs(date).subtract(amount, unit),

    /**
     * Add days to a date
     * @param {Date | string} date
     * @param {number} days
     * @returns {string}
     * @example
     * DateUtils.addDays('2026-02-16', 5) // '2026-02-21'
     */
    addDays: (date: Date | string, days: number) => dayjs(date).add(days, 'day').format('YYYY-MM-DD'),

    /**
     * Subtract days from a date
     * @param {Date | string} date
     * @param {number} days
     * @returns {string}
     * @example
     * DateUtils.subtractDays('2026-02-16', 5) // '2026-02-11'
     */
    subtractDays: (date: Date | string, days: number) => dayjs(date).subtract(days, 'day').format('YYYY-MM-DD'),

    /**
     * Get start of a unit (day, month, year).
     * @param {string | Date} date
     * @param {dayjs.ManipulateType} unit
     * @returns {dayjs.Dayjs}
     */
    startOf: (date: string | Date, unit: dayjs.ManipulateType) => dayjs(date).startOf(unit),

    /**
     * Get end of a unit (day, month, year).
     * @param {string | Date} date
     * @param {dayjs.ManipulateType} unit
     * @returns {dayjs.Dayjs}
     */
    endOf: (date: string | Date, unit: dayjs.ManipulateType) => dayjs(date).endOf(unit),
};
