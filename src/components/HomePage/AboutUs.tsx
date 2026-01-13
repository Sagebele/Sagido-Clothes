import "../../styles/AboutUs.css";
import { Link } from "react-router-dom";
import { getCurrencyPath } from "../../utils/currencyHelper";

interface TextImageSectionProps {
    title: string;
    subtitle: string;
    text: string;
    image: string;
    imageAlt: string;
    span?: string;
    imagePosition?: "left" | "right";
}

const TextImageSection = ({
    title,
    subtitle,
    text,
    image,
    imageAlt,
    span,
    imagePosition = "right",
}: TextImageSectionProps) => {
    const isImageOnLeft = imagePosition === "left";


    return (
        <div className="max-w-7xl mx-auto px-6 md:px-10 bg-inherit">
            <div
                className={`flex flex-col ${
                    isImageOnLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center lg:items-stretch gap-8`}
            >
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
                    <h2 className="text-zinc-900 text-2xl font-bold mb-3">
                        {title}
                    </h2>
                    <h3 className="text-zinc-800 text-lg font-semibold mb-4">
                        {subtitle}
                    </h3>
                    <p className="text-zinc-800 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        {text}
                    </p>
                    {span &&
                        <Link to={getCurrencyPath("/aboutus")} 
                        className="learn-more hover:cursor-pointer"
                        >
                            {span}
                        </Link>
                    }
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-72 md:h-96 lg:h-105 object-cover rounded-sm shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default TextImageSection;