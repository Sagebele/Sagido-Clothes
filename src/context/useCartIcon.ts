import { useContext } from "react";
import { CartIconContext } from "./CartIconContextDef";

export const useCartIcon = () => {
    const context = useContext(CartIconContext);

    if (!context) {
        throw new Error("useCartIcon must be used within a CartIconProvider");
    }

    return context;
};
