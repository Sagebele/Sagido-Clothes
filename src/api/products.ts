import type { Currency, Product } from "../types/product";
import { mockProducts } from "../mock/products";

export async function getProducts(params: {
    currency: Currency;
    category?: Product["category"];
    }): Promise<Product[]> {
    await new Promise((r) => setTimeout(r, 250));

        const filtered = params.category
            ? mockProducts.filter((p) => p.category === params.category)
            : mockProducts;
    //TODO:RETURN REAL DATA
    //  return mock data for now, with the requested currency
    return filtered.map((p) => ({ ...p, currency: params.currency }));
}
