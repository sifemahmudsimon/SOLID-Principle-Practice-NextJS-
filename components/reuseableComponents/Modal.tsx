"use client";

import { createPortal } from "react-dom";
import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

/**
 * Modal component that renders its content in a portal attached to document.body.
 *
 * @param {ModalProps} props - Props for the Modal component.
 * @returns {JSX.Element | null} The rendered modal or null if closed.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(true)}>Open Modal</Button>
 * <Modal isOpen={open} onClose={() => setOpen(false)}>
 *   <h2>Hello!</h2>
 *   <p>Modal content here</p>
 * </Modal>
 * ```
 */
export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 relative w-11/12 max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
