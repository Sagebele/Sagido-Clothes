import CategoryCard from "../components/HomePage/CategoryCards";
import TextImageSection from "../components/HomePage/AboutUs";
import FooterHome from "../components/Footer";
import Information from "../components/HomePage/Information";
import PictureCarousel from "../components/HomePage/PictureCarousel";
import HeroImage from "../components/HomePage/HeroImage";

const HomePage = () => {


    return (
    <div className="bg-white overflow-hidden">
        <HeroImage 
        title="New Arrivals Spring 2026"
        subtitle="Beautiful clothes, and a sleek style with Sagido Line."
        />

        <section className={`relative z-10 py-32 w-full space-y-20 overflow-hidden`}>
            <CategoryCard />
            <TextImageSection
                title="About Sagido"
                subtitle="Feel Good. Look Good. Do Good."
                text="At Sagido Clothing, we believe that fashion is more than just clothing; it's a form of self-expression and a way to embrace individuality. Our mission is to provide high-quality, stylish apparel that empowers our customers to feel confident and comfortable in their own skin. We are committed to sustainability and ethical practices, ensuring that our products not only look good but also contribute positively to the environment and society. Join us on our journey to redefine fashion with purpose and passion."
                image="/images/HomePage/aboutUs.jpg"
                imageAlt="About Sagido"
                span="Learn More"
                imagePosition="right"
            />
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
