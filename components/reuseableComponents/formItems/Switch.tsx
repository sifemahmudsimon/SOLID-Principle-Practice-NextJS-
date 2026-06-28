"use client";

import React, { InputHTMLAttributes } from "react";

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    error?: string;
};

/**
 * A controlled toggle switch component.
 *
 * This component behaves like a checkbox but styled as a toggle switch.
 * It must be controlled using `checked` and `onChange`.
 *
 * @example
 * const [isEnabled, setIsEnabled] = React.useState(false);
 *
 * <Switch
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 */
export default function Switch({ checked, onChange, label, error }: SwitchProps) {
    return (
        <div>
        <label className="flex items-center space-x-2 mb-4 cursor-pointer select-none">
            <div
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    checked ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => onChange(!checked)}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                        checked ? "translate-x-5" : ""
                    }`}
                />
            </div>
            {label && <span>{label}</span>}
        </label>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

    );
}
