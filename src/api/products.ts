import type { Product } from "../types/product";
import { api } from "./client";

export async function getProducts(params: {
    category?: Product["category"];
}): Promise<Product[]> {
    try {
        const response = await api.get<Product[]>("/products", {
            params: {
                category: params.category,
            },
        });
        
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}

export async function getProductById(id: string): Promise<Product> {
    try {
        const response = await api.get<Product>(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
}

