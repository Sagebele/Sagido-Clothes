import { useState } from "react";
import testImageFront from "../assets/images/women-clothing/testImageFront.jpg";
import testImageBack from "../assets/images/women-clothing/testimageBack.jpg";
import { useCart } from "../context/useCart";
import { AnimatedBall } from "./AnimatedBall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";


export default function ClothingCards() {
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
                id: "1",
                name: "Pink Jacket",
                price: 79.99,
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
            // TODO: Add to favorites logic
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-2xl font-bold text-zinc-900 mb-10 text-center">
                    Explore Our Clothing Collection
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className=" rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-90 overflow-hidden cursor-pointer group">
                            <img
                                src={testImageFront}
                                alt="Clothing Item"
                                className="w-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-100 hover:opacity-0 hover:scale-105"
                            />
                            <img 
                                src={testImageBack} 
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
                                Pink Jacket
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}