import { useContext, useEffect } from "react";
import CategoryCard from "../components/HomePage/CategoryCards";
import AboutUs from "../components/HomePage/AboutUs";
import { useNavbar } from "../context/useNavbar";
import FooterHome from "../components/HomePage/FooterHome";
import { ThemeContext } from "../context/ThemeContext";
import Information from "../components/HomePage/Information";
import PictureCarousel from "../components/HomePage/PictureCarousel";
import HeroVideo from "../components/HomePage/HeroVideo";

const HomePage = () => {
    const { setNavbar, resetNavbar } = useNavbar();
    const { theme } = useContext(ThemeContext)!;

    useEffect(() => {
        setNavbar({ variant: "transparent", tone: "light" });
        return () => resetNavbar();
    }, [setNavbar, resetNavbar]);

    const mainBg = theme === "light" ? "bg-white" : "bg-white/90";

    return (
    <div className={mainBg}>
        <HeroVideo 
        title="New Arrivals Spring 2026"
        subtitle="Beautiful clothes, and a sleek style with Sagido Line."
        />

        <section className={`relative z-10 py-32 w-full space-y-20`}>
            <CategoryCard />
            <AboutUs />
            <PictureCarousel />
            <Information/>
        </section>
        <section className="relative z-10 pt-10 w-full ">
            <FooterHome/>
        </section>


    </div>
    );
};

export default HomePage;
