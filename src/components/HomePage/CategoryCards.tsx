import womanImg from "../../assets/images/HomePage/womanCardImage.jpg"
import manImg from "../../assets/images/HomePage/manCardImage.jpg"
import juniorImg from "../../assets/images/HomePage/juniorCardImage.jpg"
import { useScrollAnimation } from "../../Hooks/ScrollAnimation"



const CategoryCard = () => {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14  ">
        <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
          Explore Collections for All Ages and Styles
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:gap-6 lg:items-stretch">
            {cards.map((card, index) => (
              <CardItem key={card.id} card={card} index={index} />
            ))}
        </div>
    </div>
    );
};

const CardItem = ({ card, index }: { card: CardItemProp; index: number }) => {
    const { ref, isVisible } = useScrollAnimation();
    
    let animationClass = "";
    if (index === 0) {
        animationClass = "card-slide-left-to-right";
    } else if (index === 1) {
        animationClass = "card-slide-bottom-to-top";
    } else if (index === 2) {
        animationClass = "card-slide-right-to-left";
    }

    return (
        <div
            key={card.id}
            ref={ref}
            className={`flex-[1_1_0%] min-w-0 rounded-2xl shadow-xl/30 inset-shadow-black
            hover:cursor-pointer transition-all duration-300 lg:hover:flex-[2_1_0%] ${animationClass} ${isVisible ? "visible" : ""}`}
        >
            <div className="aspect-4/3 w-full overflow-hidden h-100 transition-all rounded-t-2xl">
                <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>

            <div className="p-5 flex items-center justify-center gap-4">
                <button 
                className="rounded-xl px-4 py-1 text-sm font-semibold text-zinc-900 bg-white   
                hover:scale-105 transition hover:cursor-pointer nav-a"
                >
                    {card.buttonText}
                </button>
            </div>        
        </div>
    );
}
    
interface CardItemProp {
    id: string;
    title: string;
    imageUrl: string;
    buttonText: string;
    };
      
const cards: CardItemProp[] = [
    {
        id: "womenCard",
        title: "Women",
        imageUrl: womanImg,
        buttonText: "Shop Women",
    },
    {
        id: "menCard",
        title: "Men",
        imageUrl: manImg,
        buttonText: "Shop Men",
    },
    {
        id: "juniorCard",
        title: "Junior",
        imageUrl: juniorImg,
        buttonText: "Shop Junior",
    },
    ];


    export default CategoryCard;