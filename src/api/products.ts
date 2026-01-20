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

export async function getProductByType(type: Product["type"]): Promise<Product[]> {
    try {
        const response = await api.get<Product[]>("/products", {
            params: {
                type: type,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products by type:", error);
        throw error;
    }
}

export async function getProductsByCategory(category: Product["category"]): Promise<Product[]> {
    try {
        const response = await api.get<Product[]>("/products", {
            params: {
                category: category,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products by category:", error);
        throw error;
    }
}

export async function getCategories(): Promise<string[]> {
    try {
        const response = await api.get<string[]>("/categories");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
    }
}



export async function getTypes(): Promise<string[]> {
    try {
        const response = await api.get<string[]>("/types");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch types:", error);
        throw error;
    }
}