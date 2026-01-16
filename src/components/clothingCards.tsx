import { useState } from "react";

import { useCart } from "../context/useCart";
import { AnimatedBall } from "./AnimatedBall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


interface ClothingItem {
    id: string;
    name: string;
    price: number;
    imageFront: string;
    imageBack: string;
    quantity?: number;
}

export default function ClothingCards({ id, name, price, imageFront, imageBack, quantity }: ClothingItem) {
    const { addItem, cartIconRef, favoritesIconRef } = useCart();
    const [animatingBall, setAnimatingBall] = useState<{
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    } | null>(null);

    const handleAddCart = (e: React.MouseEvent<SVGSVGElement>) => {
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
                id: id,
                name: name,
                price: price,
                quantity: quantity || 1,
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
            // Here you would also add the item to favorites context/state
        }
    };

    const handleBallComplete = () => {
        setAnimatingBall(null);
    };

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
            <div className="max-w-8xl px-4 sm:px-6 lg:px-8 -20 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    <div className=" rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-90 overflow-hidden cursor-pointer group">
                            <img
                                src={imageFront}
                                alt="Clothing Item"
                                className="w-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-100 hover:opacity-0 hover:scale-105"
                            />
                            <img 
                                src={imageBack} 
                                alt="Clothing Item Back" 
                                className="w-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 hover:scale-105"
                            />
                            <FontAwesomeIcon icon={faShoppingBasket} 
                                className="absolute top-3 right-2 text-white bg-black/30 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                                onClick={handleAddCart}
                            />
                            <FontAwesomeIcon icon={faHeart} 
                                className="absolute top-3 left-2 text-white bg-black/30 backdrop-blur-md rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                                onClick={handleAddtoFavorites}
                            />
                            <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-lg bg-black/30 backdrop-blur-md font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {name} - ${price}
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}