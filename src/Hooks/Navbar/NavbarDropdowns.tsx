// Hooks/useNavbarDropdowns.ts
import { useCallback } from "react";
import { useHoverDropdown } from "./HoverDropdown";
import { useNavbarVariantLock } from "./NavbarVariantLock";

export function useNavbarDropdowns() {
    const { holdSolid, release } = useNavbarVariantLock();

    const options = {
        closeDelay: 200,
        onOpen: holdSolid,
        onClose: release,
    } as const;

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
