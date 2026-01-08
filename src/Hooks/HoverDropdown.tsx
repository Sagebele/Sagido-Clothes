import { useCallback, useRef, useState } from "react";

type Options = {
    closeDelay?: number;
    onOpen?: () => void;
    onClose?: () => void;
};

export function useHoverDropdown({ closeDelay = 150, onOpen, onClose }: Options = {}) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const cancel = useCallback(() => {
        if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        }
    }, []);

    const openNow = useCallback(() => {
        cancel();
        setOpen((prev) => {
        if (!prev) onOpen?.();
        return true;
        });
    }, [cancel, onOpen]);

    const closeLater = useCallback(() => {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
        setOpen((prev) => {
            if (prev) onClose?.();
            return false;
        });
        }, closeDelay);
    }, [cancel, closeDelay, onClose]);

    const closeNow = useCallback(() => {
        cancel();
        setOpen((prev) => {
        if (prev) onClose?.();
        return false;
        });
    }, [cancel, onClose]);

    return { open, openNow, closeLater, closeNow };
}
