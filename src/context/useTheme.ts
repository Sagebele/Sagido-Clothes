import { useContext } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};

export const setTheme = (theme: Theme) => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    ctx.setTheme(theme);
};
