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
                className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-centerpy-20"
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
            <h2 className="m-10 text-zinc-900 font-bold text-center text-3xl">
                Featured Item
            </h2>
            <div className="min-h-screen flex items-start justify-center py-20 px-8">
                {/* options bar */}
                <div className="flex flex-col items-center justify-start mb-8 sticky top-24 ">
                    <h2 className="mx-10 text-zinc-900 font-semibold text-center text-xl mb-5">
                        Sort By
                    </h2>
                    <select className="text-zinc-900 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="newest">Newest Arrivals</option>
                        <option value="priceLowHigh">Price: Low to High</option>    
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="popularity">Most Popular</option>
                    </select>

                </div>
                <div className="flex-1">
                    <ClothingCards/>
                </div>
            </div>
            
            <Footer />
        </>
    );
};


export default WomenPage;
