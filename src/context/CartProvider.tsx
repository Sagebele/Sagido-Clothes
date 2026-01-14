import { useState, useCallback, type ReactNode } from "react";
import { CartContext, type CartItem } from "./CartContext";

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const count = items.reduce((total, item) => total + item.quantity, 0);

    const addItem = useCallback((item: CartItem) => {
        setItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            if (existingItem) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return (
        <CartContext.Provider value={{ items, count, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
