
import HeroImage from "../components/HomePage/HeroImage";
import TextImageSection from "../components/HomePage/AboutUs";
import FooterHome from "../components/Footer";

const AboutUsPage = () => {


    return (
        <div className="w-full bg-white">
            <HeroImage 
                title="About Us"
                subtitle="Learn more about Sagido Line, our mission, and our values."
                image="/images/aboutusBackground.jpg"
            />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <TextImageSection
                    title="About Sagido"
                    subtitle="Feel Good. Look Good. Do Good."
                    text="At Sagido Clothing, we believe that fashion is more than just clothing; it's a form of self-expression and a way to embrace individuality. Our mission is to provide high-quality, stylish apparel that empowers our customers to feel confident and comfortable in their own skin. We are committed to sustainability and ethical practices, ensuring that our products not only look good but also contribute positively to the environment and society. Join us on our journey to redefine fashion with purpose and passion."
                    image="/images/HomePage/aboutUs.jpg"
                    imageAlt="About Sagido"
                    imagePosition="right"
                />
            </section>/
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <TextImageSection
                    title="Our Mission"
                    subtitle="Committed to Excellence"
                    text="Our mission at Sagido Clothing is to revolutionize the fashion industry by prioritizing quality, sustainability, and customer satisfaction. We strive to create clothing that not only looks good but also feels good to wear, while minimizing our environmental impact through ethical sourcing and production practices."
                    image="https://images.pexels.com/photos/13996791/pexels-photo-13996791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    imageAlt="Our Mission"
                    imagePosition="left"
                />
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <FooterHome/>
            </section>
        </div>
    );
}
export default AboutUsPage;