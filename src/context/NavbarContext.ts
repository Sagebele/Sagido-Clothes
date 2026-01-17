import { createContext } from "react";
import type { NavbarContextValue } from "../types/navbar";

export const NavbarContext = createContext<NavbarContextValue | null>(null);
