import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import HeroImage from "../components/HomePage/HeroImage";
import mainImg from "../assets/images/AboutUsPage/Background.jpg";
import TextImageSection from "../components/HomePage/AboutUs";
import aboutUsImg from "../assets/images/HomePage/aboutUs.jpg";
import FooterHome from "../components/HomePage/FooterHome";

const AboutUsPage = () => {

    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid", tone: "dark" });
    }, [setNavbar]);    


    return (
        <div className="w-full bg-white">
            <HeroImage 
                title="About Us"
                subtitle="Learn more about Sagido Line, our mission, and our values."
                image={mainImg}
            />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <TextImageSection
                    title="About Sagido"
                    subtitle="Feel Good. Look Good. Do Good."
                    text="At Sagido Clothing, we believe that fashion is more than just clothing; it's a form of self-expression and a way to embrace individuality. Our mission is to provide high-quality, stylish apparel that empowers our customers to feel confident and comfortable in their own skin. We are committed to sustainability and ethical practices, ensuring that our products not only look good but also contribute positively to the environment and society. Join us on our journey to redefine fashion with purpose and passion."
                    image={aboutUsImg}
                    imageAlt="About Sagido"
                    span="Learn More"
                    imagePosition="right"
                />
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <FooterHome/>
            </section>
        </div>
    );
}
export default AboutUsPage;