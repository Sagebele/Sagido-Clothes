import { useCallback, useEffect, useRef, useState } from "react";
import type { HoverDropdownOptions } from "../../types/components";

export function useHoverDropdown({ closeDelay = 150, onOpen, onClose }: HoverDropdownOptions = {}) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const cancel = useCallback(() => {
        if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        }
    }, []);

    useEffect(() => {
        return () => cancel(); 
    }, [cancel]);

    const openNow = useCallback(() => {
        cancel();
        setOpen((prev) => {
        const shouldCallOnOpen = !prev;
        if (shouldCallOnOpen && onOpen) {
            Promise.resolve().then(() => onOpen());
        }
        return true;
        });
    }, [cancel, onOpen]);

    const closeLater = useCallback(() => {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
        setOpen((prev) => {
            const shouldCallOnClose = prev;
            if (shouldCallOnClose && onClose) {
            // Schedule the callback to run after state update
            Promise.resolve().then(() => onClose());
            }
            return false;
        });
        }, closeDelay);
    }, [cancel, closeDelay, onClose]);

    const closeNow = useCallback(() => {
        cancel();
        setOpen((prev) => {
        const shouldCallOnClose = prev;
        if (shouldCallOnClose && onClose) {
            // Schedule the callback to run after state update
            Promise.resolve().then(() => onClose());
        }
        return false;
        });
    }, [cancel, onClose]);

    return { open, openNow, closeLater, closeNow };
}
