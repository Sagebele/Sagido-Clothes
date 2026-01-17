export type NavbarVariant = "transparent" | "solid";

export type NavbarConfig = {
    variant: NavbarVariant;
};

export type NavbarContextValue = {
    config: NavbarConfig;
    setNavbar: (partial: Partial<NavbarConfig>) => void;
    resetNavbar: () => void;
};
