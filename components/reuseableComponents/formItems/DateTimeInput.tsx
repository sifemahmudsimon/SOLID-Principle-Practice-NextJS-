"use client";

import React, { InputHTMLAttributes } from "react";

type DateTimeInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

/**
 * A reusable input component for date and time values.
 *
 * This component supports all standard HTML <input> props,
 * including `type="date"`, `type="time"`, `type="datetime-local"`,
 * `min`, `max`, `required`, etc.
 *
 * @example
 * // Date input
 * const [date, setDate] = React.useState("");
 *
 * <DateTimeInput
 *   label="Select Date"
 *   type="date"
 *   value={date}
 *   onChange={(e) => setDate(e.target.value)}
 * />
 *
 * @example
 * // Time input
 * const [time, setTime] = React.useState("");
 *
 * <DateTimeInput
 *   label="Select Time"
 *   type="time"
 *   value={time}
 *   onChange={(e) => setTime(e.target.value)}
 * />
 *
 * @example
 * // Date & Time input
 * <DateTimeInput
 *   label="Appointment"
 *   type="datetime-local"
 *   required
 *   min="2026-01-01T00:00"
 * />
 * */
export default function DateTimeInput({ label,error, ...props }: DateTimeInputProps) {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}
            <input
                {...props}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
