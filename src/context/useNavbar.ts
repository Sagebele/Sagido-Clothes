import { useContext } from "react";
import { NavbarContext } from "./NavbarContext";

export const useNavbar = () => {
    const ctx = useContext(NavbarContext);
    if (!ctx) throw new Error("useNavbar must be used within NavbarProvider");
    return ctx;
};


export const setNavbarConfig = (config: { variant: "transparent" | "solid"; tone: "light" | "dark" }) => {

    return config;
}

export const getNavbarBg = (variant: "transparent" | "solid", isScrolled: boolean) => {
    const shouldBeTransparent = variant === "transparent" && !isScrolled;

    return shouldBeTransparent
        ? "bg-transparent border-b border-transparent"
        : "bg-black/20 backdrop-blur-md border-b border-white/10";
};



export const setNavbarBg= (variant: "transparent" | "solid") => {
    if (variant === "transparent") {
        return "bg-transparent border-b border-transparent";
    } else {
        return "bg-black/20 backdrop-blur-md border-b border-white/10";
    }
}

export const setNavbarTextTone = (tone: "light" | "dark") => {
    return tone === "light" ? "text-zinc-900" : "text-stone-200";
}