import { useContext, useEffect } from "react";
import BackgroundLayout from "../components/HomePage/BackgroundLayout";
import CategoryCard from "../components/HomePage/CategoryCards";
import AboutUs from "../components/HomePage/AboutUs";
import { useNavbar } from "../context/useNavbar";
import FooterHome from "../components/HomePage/FooterHome";
import { ThemeContext } from "../context/ThemeContext";
import Information from "../components/HomePage/Information";
import PictureCarousel from "../components/HomePage/PictureCarousel";

const HomePage = () => {
    const { setNavbar, resetNavbar } = useNavbar();
    const { theme } = useContext(ThemeContext)!;

    useEffect(() => {
        setNavbar({ variant: "transparent", tone: "light" });
        return () => resetNavbar();
    }, [setNavbar, resetNavbar]);

    const mainBg = theme === "light" ? "bg-white" : "bg-zinc-900";

    return (
    <div className={mainBg}>
        <BackgroundLayout>
            <main className="absolute bottom-24 left-8 md:bottom-15 md:left-10 lg:left-50 z-20 max-w-md md:max-w-lg bg-black/10 border-transparent rounded-xl">
            <h2 className="text-3xl font-bold mb-3 text-stone-300">
                Happy Holidays from Sagido
            </h2>
            <p className="text-xl mb-6 text-stone-300">
                Beautiful clothes, and a sleek style with Sagido Line.
            </p>
            </main>
        </BackgroundLayout>

        <section className={`relative z-10 py-16 `}>
            <CategoryCard />
            <AboutUs />
        </section>
        <Information />
        <PictureCarousel />
        <FooterHome />

    </div>
    );
};

export default HomePage;
