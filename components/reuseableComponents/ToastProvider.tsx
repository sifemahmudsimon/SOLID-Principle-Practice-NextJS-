"use client";

import { Toaster } from "sonner";

/**
 * @param children
 * @constructor
 *
 * @example
 * import { toast } from "sonner";
 * toast("Default message");
 * toast.success("Saved successfully!");
 * toast.error("Something went wrong!");
 * toast.warning("Be careful!");
 * toast.info("Some information");
 *
 * @example
 * //Custom Duration
 * toast.success("Saved!", {
 *   duration: 5000, // 5 seconds
 * });
 *
 * @example
 * With Description
 * toast.success("Saved!", {
 *   duration: 5000, // 5 seconds
 * });
 *
 * @example
 * //With Action Button
 * toast.error("Failed to save", {
 *   description: "Please try again.",
 *   action: {
 *     label: "Retry",
 *     onClick: () => console.log("Retry clicked"),
 *   },
 * });
 *
 * @example
 * //For custom jsx
 * toast(
 *   <div>
 *     <strong>Custom Title</strong>
 *     <p>More details here</p>
 *   </div>
 * );
 *
 * @example
 * //For Promise
 * toast.promise(fetch("/api/save"), {
 *   loading: "Saving...",
 *   success: "Saved!",
 *   error: "Error!",
 * });
 */
export default function ToastProvider() {
    return (
        <Toaster
            position="bottom-right"
            richColors
            closeButton
        />
    );
}
