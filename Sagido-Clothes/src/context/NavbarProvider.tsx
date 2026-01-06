import React, { useMemo, useState } from "react";
import { type NavbarConfig, NavbarContext, type NavbarContextValue } from "./NavbarContext";

const DEFAULT_NAVBAR: NavbarConfig = {
    variant: "solid",
    tone: "dark",
};

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [config, setConfig] = useState<NavbarConfig>(DEFAULT_NAVBAR);

    const setNavbar = (partial: Partial<NavbarConfig>) => {
        setConfig((prev) => ({ ...prev, ...partial }));
    };

    const resetNavbar = () => setConfig(DEFAULT_NAVBAR);

    const value: NavbarContextValue = useMemo(
        () => ({ config, setNavbar, resetNavbar }),
        [config]
    );

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};
