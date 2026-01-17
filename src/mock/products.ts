import type { Product } from "../types/product";
import mockimgBack from "../assets/images/women-clothing/testimageBack.jpg";
import mockimgFront from "../assets/images/women-clothing/testImageFront.jpg";

export const mockProducts: Product[] = [
    {
        id: "p_001",
        name: "Classic Hoodie",
        description: "Soft cotton hoodie",
        imageFront: mockimgFront,
        imageBack: mockimgBack,
        price: 29.99,
        category: "women",
        quantity: 1,
    },
    {
        id: "p_002",
        name: "Another Hoodie",
        description: "Soft cotton hoodie",
        imageFront: mockimgFront,
        imageBack: mockimgBack,
        price: 33.99,
        category: "women",
        quantity: 1,
    },
];
