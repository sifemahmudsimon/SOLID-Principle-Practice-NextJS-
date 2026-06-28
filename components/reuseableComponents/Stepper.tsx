"use client";

import React from "react";

type StepperProps = {
    steps: string[];
    currentStep: number; // 0-based index
};

/**
 * @param steps
 * @param currentStep
 * @constructor
 *
 * @example
 * <Stepper steps={["Info", "Payment", "Confirm"]} currentStep={1} />
 */
export default function Stepper({ steps, currentStep }: StepperProps) {
    return (
        <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                            index <= currentStep
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "border-gray-300 text-gray-500"
                        }`}
                    >
                        {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`flex-1 h-1 ${
                                index < currentStep ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
