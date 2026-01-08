import { createContext } from "react";

export type NavbarVariant = "transparent" | "solid";
export type NavbarTone = "light" | "dark";

export type NavbarConfig = {
    variant: NavbarVariant;
    tone: NavbarTone;
};

export type NavbarContextValue = {
    config: NavbarConfig;
    setNavbar: (partial: Partial<NavbarConfig>) => void;
    resetNavbar: () => void;
};

export const NavbarContext = createContext<NavbarContextValue | null>(null);
