import womanImg from "../assets/images/womanCardImage.jpg"
import manImg from "../assets/images/manCardImage.jpg"
import juniorImg from "../assets/images/juniorCardImage.jpg"

const CategoryCard = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl overflow-hidden border shadow-sm bg-white"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex items-center justify-center gap-4">

                    <button 
                    className="rounded-xl px-4 py-2 text-sm font-semibold border bg-black 
                    hover:bg-black hover:text-white hover:scale-105 transition"
                    >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
        </div>
    );
};
    
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