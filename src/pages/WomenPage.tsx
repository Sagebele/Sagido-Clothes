import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import Footer from "../components/Footer";
import womenBackground from "../assets/images/women-clothing/background.jpg";
import ClothingCards from "../components/clothingCards";

const WomenPage = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid" });
        window.scrollTo(0, 0);
    }, [setNavbar]);

    return (
        <>
            <div 
                className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
                style={{
                    backgroundImage: `url("${womenBackground}")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
                        Women Clothing
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-100 drop-shadow-md max-w-2xl">
                        Discover our exclusive women's collection
                    </p>
                </div>
            </div>
            <ClothingCards />
            <Footer />
        </>
    );
};

export default WomenPage;
