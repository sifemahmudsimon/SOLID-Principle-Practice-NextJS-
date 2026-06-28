"use client";

import { useEffect } from "react";

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    position?: "left" | "right" | "top" | "bottom";
    children: React.ReactNode;
    width?: string; // default "w-64" for left/right
    height?: string; // default "h-64" for top/bottom
};


/**
 * @param isOpen
 * @param onClose
 * @param position
 * @param width
 * @param height
 * @param children
 * @constructor
 *
 * @example
 * //Side drawer
 * const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <button
 *         onClick={() => setOpen(true)}
 *         className="p-2 bg-blue-500 text-white rounded"
 *       >
 *         Open Drawer
 *       </button>
 *
 *       <Drawer isOpen={open} onClose={() => setOpen(false)} position="left">
 *         <div className="p-4 flex flex-col space-y-4">
 *           <button onClick={() => setOpen(false)}>Close</button>
 *           <a href="/home">Home</a>
 *           <a href="/about">About</a>
 *           <a href="/contact">Contact</a>
 *         </div>
 *       </Drawer>
 *     </>
 *   );
 *
 * @example
 * //bottom drawer
 * <Drawer isOpen={open} onClose={() => setOpen(false)} position="bottom" height="h-56">
 *   <div className="p-4 flex flex-col space-y-3">
 *     <button onClick={() => setOpen(false)}>Close</button>
 *     <button className="bg-blue-500 text-white py-2 rounded">Option 1</button>
 *     <button className="bg-green-500 text-white py-2 rounded">Option 2</button>
 *   </div>
 * </Drawer>
 */
export default function Drawer({
                                   isOpen,
                                   onClose,
                                   position = "left",
                                   width = "w-64",
                                   height = "h-64",
                                   children,
                               }: DrawerProps) {
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!isOpen) return null;

    // Slide positions
    const slidePosition = {
        left: `fixed top-0 left-0 ${width} h-full transform transition-transform duration-300`,
        right: `fixed top-0 right-0 ${width} h-full transform transition-transform duration-300`,
        top: `fixed top-0 left-0 w-full ${height} transform transition-transform duration-300`,
        bottom: `fixed bottom-0 left-0 w-full ${height} transform transition-transform duration-300`,
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`${slidePosition[position]} bg-white z-50`}>
                {children}
            </div>
        </>
    );
}
