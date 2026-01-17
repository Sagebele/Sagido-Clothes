export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    count: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    cartIconRef: React.RefObject<HTMLDivElement | null>;
    favoritesIconRef: React.RefObject<HTMLDivElement | null>;
}
