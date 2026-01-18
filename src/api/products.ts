import type { Currency, Product } from "../types/product";
import { api } from "./client";

export async function getProducts(params: {
    currency: Currency;
    category?: Product["category"];
}): Promise<Product[]> {
    try {
        const response = await api.get<Product[]>("/products", {
            params: {
                category: params.category,
            },
        });
        
        // Convert price to requested currency (Phase 2: add exchange rates)
        return response.data.map(p => ({
            ...p,
            currency: params.currency,
        }));
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}

export async function getProductById(id: string): Promise<Product> {
    try {
        const response = await api.get<Product>(`/products/${id}`);
        return {
            ...response.data,
            };
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
}

