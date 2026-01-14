import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import { useScrollAnimation } from "../Hooks/ScrollAnimation";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";
import womenBackground from "../assets/images/women-clothing/background.jpg";
import "../styles/ScrollAnimation.css";
import ClothingCards from "../components/clothingCards";
import "../styles/ScrollAnimation.css";

const WomenPage = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid", tone: "dark" });
        window.scrollTo(0, 0);
    }, [setNavbar]);

    const { ref, isVisible } = useScrollAnimation();

    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <div className={`w-full mx-auto mask-b-from-50% mask-b-to-80% h-full ${isVisible ? "visible" : ""} women-background-animation`} 
                    ref={ref} 
                >
                    <div className="relative w-full">
                        <img src={womenBackground} alt="Women Clothing Background" 
                        className="w-full h-[120vh] rounded-b-sm  shadow-md object-cover image-fade-in"
                        />
                        <h1 className="absolute w-full top-1/2 left-1/2 z-10 text-3xl font-bold text-center text-zinc-900 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-sm backdrop-blur-md bg-white/10">
                            Women Clothing
                        </h1>
                    </div>
                    
                </div>
                <ClothingCards />
                <Footer />
            </div>
        </>
    );
};

export default WomenPage;
