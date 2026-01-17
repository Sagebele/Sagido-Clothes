


export type Currency = "eur" | "usd";

export type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;       // price in the requested currency
    category: "women" | "men" | "junior";
    imageFront?: string;
    imageBack?: string;
    quantity?: number;
};