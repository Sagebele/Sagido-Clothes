import aboutUsImg from "../../assets/images/aboutUs.jpg";
import "../../styles/AboutUs.css";

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto mt-15 px-6 md:px-10 bg-inherit mb-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">

                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
                    <h2 className="text-zinc-900 text-2xl font-bold mb-3">
                        About Sagido
                    </h2>
                    <h3 className="text-zinc-800 text-lg font-semibold mb-4">
                        Feel Good. Look Good. Do Good.
                    </h3>
                    <p className="text-zinc-800 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        At Sagido Clothing, we believe that fashion is more than just clothing;
                        it's a form of self-expression and a way to embrace individuality. Our mission is to provide high-quality, stylish apparel that empowers our customers to feel confident and comfortable in their own skin. We are committed to sustainability and ethical practices, ensuring that our products not only look good but also contribute positively to the environment and society. Join us on our journey to redefine fashion with purpose and passion.
                    </p>
                    <span className="learn-more">Learn More</span>

                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={aboutUsImg}
                        alt="About Sagido"
                        className="w-full h-72 md:h-96 lg:h-105 object-cover rounded-sm shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;