import { useScrollAnimation } from "../../Hooks/ScrollAnimation"
import { useNavigate } from "react-router-dom"
import { getCurrencyPath } from "../../utils/currencyHelper"
import type { CardItemProp } from "../../types/components"




const CategoryCard = () => {
    return (
        <div className="w-full mx-auto px-6 md:px-10 py-14  ">
            <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
            Explore Collections for All Ages and Styles
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                {cards.map((card, index) => (
                <CardItem key={card.id} card={card} index={index} />
                ))}
            </div>
        </div>
    );
};

const CardItem = ({ card, index }: { card: CardItemProp; index: number }) => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();
    
    let animationClass = "";
    if (index === 0) {
        animationClass = "left-to-right-anim";
    } else if (index === 1) {
        animationClass = "bottom-to-top-anim";
    } else if (index === 2) {
        animationClass = "right-to-left-anim";
    }

    return (
        <>
            <div
                key={card.id}
                ref={ref}
                className={`min-w-0 rounded-sm shadow-xl/30 
                hover:cursor-pointer transition-all duration-500 lg:h-200 md:h-150 h-100 group relative overflow-hidden
                ${animationClass} ${isVisible ? "visible" : ""}`}
                onClick={() => navigate(getCurrencyPath(`/${card.title.toLowerCase()}`))}
            >
                <div className="absolute w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"/>
                <h2 className="absolute z-20 top-1/2 left-1/2 text-white text-2xl font-semibold -translate-x-1/2 -translate-y-1/2 px-4 py-2
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 nav-a">
                    Shop {card.title}
                </h2>
                <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover rounded-sm shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
            </div>
        </>
    );
}
const cards: CardItemProp[] = [
    {
        id: "womenCard",
        title: "Women",
        imageUrl: "/images/HomePage/womanCardImage.jpg",
    },
    {
        id: "menCard",
        title: "Men",
        imageUrl: "/images/HomePage/manCardImage.jpg",
    },
    {
        id: "juniorCard",
        title: "Junior",
        imageUrl: "/images/HomePage/juniorCardImage.jpg",
    },
    ];


    export default CategoryCard;