import React, { useCallback, useMemo, useState } from "react";
import { type NavbarConfig, NavbarContext    } from "./NavbarContext";

const DEFAULT_NAVBAR: NavbarConfig = {
    variant: "solid",
    tone: "dark",
};

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [config, setConfig] = useState(DEFAULT_NAVBAR);

    const setNavbar = useCallback((partial: Partial<NavbarConfig>) => {
        setConfig((prev) => {
            const next = { ...prev, ...partial };
            return (next.variant === prev.variant && next.tone === prev.tone) ? prev : next;
        });
    }, []);

    const resetNavbar = useCallback(() => {
        setConfig(DEFAULT_NAVBAR);
    }, []);

    const value = useMemo(
        () => ({ config, setNavbar, resetNavbar }),
        [config, setNavbar, resetNavbar]
    );

    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
};

