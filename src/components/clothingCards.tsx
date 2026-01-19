import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { AnimatedBall } from "./AnimatedBall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import type { Product, Currency } from "../types";
import { getProductsByCategory } from "../api/products";
import { getErrorMessage } from "../api/errors";

interface ClothingCardsProps {
    selectedCategories?: string[];
    sortBy?: string;
    category?: "women" | "men" | "junior";
}

export default function ClothingCards({ selectedCategories = [], sortBy = "newest", category }: ClothingCardsProps) {
    const { currency: currencyParam } = useParams<{ currency?: string }>();
    const currency: Currency = (currencyParam === "usd" ? "usd" : "eur") as Currency;
    const navigate = useNavigate();
    const { addItem, cartIconRef, favoritesIconRef } = useCart();
    const [animatingBall, setAnimatingBall] = useState<{
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    } | null>(null);

    const handleProductClick = (productName: string) => {
        navigate(`/${currency}/product/${productName}`);
    };

    const handleAddCart = (e: React.MouseEvent<SVGSVGElement>, product: Product) => {
        e.preventDefault();
        const target = e.currentTarget;
        const buttonRect = target.getBoundingClientRect();
        const cartIcon = cartIconRef.current;

        if (cartIcon) {
            const cartRect = cartIcon.getBoundingClientRect();
            
            const startX = buttonRect.left + buttonRect.width / 2;
            const startY = buttonRect.top + buttonRect.height / 2;
            const endX = cartRect.left + cartRect.width / 2;
            const endY = cartRect.top + cartRect.height / 2;

            setAnimatingBall({ startX, startY, endX, endY });

            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            });
        }

    };


    const handleAddtoFavorites = (e: React.MouseEvent<SVGSVGElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const buttonRect = target.getBoundingClientRect();
        const favIcon = favoritesIconRef.current;

        if (favIcon) {
            const favRect = favIcon.getBoundingClientRect();
            
            const startX = buttonRect.left + buttonRect.width / 2;
            const startY = buttonRect.top + buttonRect.height / 2;
            const endX = favRect.left + favRect.width / 2;
            const endY = favRect.top + favRect.height / 2;

            setAnimatingBall({ startX, startY, endX, endY });
            //TODO: Add to favorites logic here
        }
    };

    const handleBallComplete = () => {
        setAnimatingBall(null);
    };

    // Mock product data for demonstration
    const [baseProducts, setBaseProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const EUR_TO_USD = 1.10;

    const convertedProducts = useMemo(() => {
        if (currency === "usd") {
            return baseProducts.map(product => ({
                ...product,
                price: Number((product.price * EUR_TO_USD).toFixed(2))
            }));
        }
        return baseProducts;
    }, [baseProducts, currency]);

    // Filter and sort products
    const products = useMemo(() => {
        let filtered = [...convertedProducts];

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => {
                if (product.type) {
                    return selectedCategories.includes(product.type);
                }

            });
        }

        switch (sortBy) {
            case "priceLowHigh":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "priceHighLow":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "newest":
            default:
                break;
        }

        return filtered;
    }, [convertedProducts, selectedCategories, sortBy]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getProductsByCategory(category || "women");
                setBaseProducts(data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div>
            {animatingBall && (
                <AnimatedBall
                    startX={animatingBall.startX}
                    startY={animatingBall.startY}
                    endX={animatingBall.endX}
                    endY={animatingBall.endY}
                    onComplete={handleBallComplete}
                />
            )}  
            <div className="max-w-8xl px-4 sm:px-6 lg:px-8 mx-auto">
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-lg text-gray-600">Loading products...</p>
                    </div>
                )}
                
                {error && (
                    <div className="flex items-center justify-center py-20">
                        <p className="text-lg text-red-600">{error}</p>
                    </div>
                )}
                
                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="relative w-full aspect-3/4 cursor-pointer group rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

                                <img
                                    src={product.images?.main?.[0] }
                                    alt={product.images?.alt || "Clothing Item"}
                                    className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-100 hover:opacity-0 hover:scale-105"
                                    onClick={() => handleProductClick(product.id)} 
                                />
                                <img 
                                    src={product.images?.main?.[1] } 
                                    alt={product.images?.alt ? `${product.images.alt} - Back` : "Clothing Item Back"} 
                                    className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:scale-105"
                                    onClick={() => handleProductClick(product.id)} 
                                />
                                <FontAwesomeIcon icon={faShoppingBasket} 
                                    className="absolute top-3 right-2 text-white bg-black/30 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    onClick={(e) => handleAddCart(e, product)}
                                />
                                <FontAwesomeIcon icon={faHeart} 
                                    className="absolute top-3 left-2 text-white bg-black/30 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    onClick={handleAddtoFavorites}
                                />
                                <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-lg bg-black/30 backdrop-blur-md font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {product.name} - {currency === "usd" ? "$" : "€"}{product.price}
                                </h3>
                            </div>
                        ))}     
                    </div>
                )}
            </div>
        </div>
    );
}