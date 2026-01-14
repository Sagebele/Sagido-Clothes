import { createContext } from "react";

interface IconContextType {
    cartIconRef: React.RefObject<HTMLDivElement | null>;
    favoritesIconRef: React.RefObject<HTMLDivElement | null>;
}

export const CartIconContext = createContext<IconContextType | undefined>(undefined);
