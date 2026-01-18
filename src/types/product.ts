


export type Currency = "eur" | "usd";

export type ProductImages = {
  imageFront?: string;
  imageBack?: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: "women" | "men" | "junior";
  images: ProductImages;
  type: string;
  active?: boolean;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
};