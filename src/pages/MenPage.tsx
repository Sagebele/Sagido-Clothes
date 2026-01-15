import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import Footer from "../components/Footer";
import ClothingCards from "../components/clothingCards";

const MenPage = () => {
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
                    backgroundImage: `url("https://images.unsplash.com/photo-1633242244592-857801ba166c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
                        Men's Collection
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-100 drop-shadow-md max-w-2xl">
                        Discover our exclusive men's collection
                    </p>
                </div>
            </div>
            <ClothingCards />
            <Footer />
        </>
    );
};

export default MenPage;
