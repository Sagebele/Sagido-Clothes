import { useCallback } from "react";
import { useHoverDropdown } from "./HoverDropdown";

type Args = {
    closeDelay?: number;
    onOpen: () => void;
    onClose: () => void;
};

export function useNavbarDropdowns({ closeDelay = 200, onOpen, onClose }: Args) {
    const options = { closeDelay, onOpen, onClose };

    const women = useHoverDropdown(options);
    const men = useHoverDropdown(options);
    const junior = useHoverDropdown(options);
    const search = useHoverDropdown(options);
    const currency = useHoverDropdown(options);
    const cart = useHoverDropdown(options);

    const closeAll = useCallback(() => {
        women.closeNow();
        men.closeNow();
        junior.closeNow();
        search.closeNow();
        currency.closeNow();
        cart.closeNow();
    }, [women, men, junior, search, currency, cart]);

    return { women, men, junior, search, currency, cart, closeAll };
}
