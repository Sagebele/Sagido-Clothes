


export type Currency = "eur" | "usd";

export type ProductCategory = "women" | "men" | "junior";

export type ProductType = 
    | "hoodie" 
    | "jacket" 
    | "dress" 
    | "tee" 
    | "pants" 
    | "shirt" 
    | "sweater" 
    | "coat";

export type ProductImages = {
    main: string[];
    gallery?: string[];
    thumbnail: string;
    alt: string;
};

export type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: ProductCategory;
    images: ProductImages;
    type: ProductType;
    active?: boolean;
    quantity?: number;
    createdAt?: Date;
    updatedAt?: Date;
};