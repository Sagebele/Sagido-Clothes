import { useCallback, useRef } from "react";
import { useNavbar } from "../../context/useNavbar";

export function useNavbarVariantLock() {
    const { setNavbar } = useNavbar();
    const openCountRef = useRef(0);

    const holdSolid = useCallback(() => {
        openCountRef.current += 1;
        setNavbar({ variant: "solid" });
    }, [setNavbar]);

    const release = useCallback(() => {
        openCountRef.current = Math.max(0, openCountRef.current - 1);
        if (openCountRef.current === 0) {
        setNavbar({ variant: "transparent" });
        }
    }, [setNavbar]);

    return { holdSolid, release };
}
