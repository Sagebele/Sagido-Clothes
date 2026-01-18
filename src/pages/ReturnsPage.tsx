
import FooterHome from "../components/Footer";
import HeroImage from "../components/HomePage/HeroImage";
import { Link } from "react-router-dom";
import { getCurrencyPath } from "../utils/currencyHelper";
import { useScrollAnimation } from "../Hooks/ScrollAnimation";

const ReturnItem = ({ item }: { item: { id: number; title: string; content: string } }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <details
            key={item.id}
            ref={ref}
            className={`group border border-white/20 rounded-lg p-6 bg-black/50 backdrop-blur-lg hover:border-white/30 transition-colors scroll-fade-in ${isVisible ? "visible" : ""}`}
        >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-white group-open:text-zinc-400">
                <h3 className="text-lg">
                    {item.title}
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform duration-300">
                    +
                </span>
            </summary>
            <p className="text-white mt-4 leading-relaxed">
                {item.content}
            </p>
        </details>
    );
};

const RETURN_ITEMS = [
    {
        id: 1,
        title: "Return Period",
        content: "You may return or exchange items within 30 days of receiving your order. To be eligible for a return or exchange, the items must be in their original condition, unworn, unwashed, and with all tags attached.",
    },
    {
        id: 2,
        title: "Return Process",
        content: "To initiate a return or exchange, please contact our customer support team at support@sagidoclothing.com. Provide your order number and the reason for the return or exchange. Our team will guide you through the process and provide you with a return authorization if applicable.",
    },
    {
        id: 3,
        title: "Refunds",
        content: "Once we receive your returned items and verify their condition, we will process your refund. Refunds will be issued to the original payment method used for the purchase. Please allow 5-7 business days for the refund to reflect in your account.",
    },
    {
        id: 4,
        title: "Exchanges",
        content: "If you would like to exchange an item for a different size or color, we offer free exchanges within the 30-day return period. Simply contact our customer support team with your exchange request, and we will arrange the shipment of your replacement item.",
    },
];

export default function ReturnsPage() {


    return (
        <>
            <HeroImage 
                title="Returns & Exchanges"
                subtitle="Hassle-free returns and exchanges for your satisfaction."
                image="/images/returnsBackground.jpg"
            />
            <section className="bg-black/10 backdrop-blur-lg border-t border-white/20 overflow-hidden">
                <div className="relative z-10 w-full py-20 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {RETURN_ITEMS.map((item) => (
                                <ReturnItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-16 p-8 bg-white/20 backdrop-blur-sm rounded-lg text-center border border-white/20">
                    <h2 className="text-2xl font-bold mb-3 text-zinc-900">
                        Need Further Assistance?
                    </h2>
                    <p className="text-zinc-800 mb-4">
                        Contact our support team for any questions about returns and exchanges.
                    </p>
                    <Link to={getCurrencyPath("/contactus")}
                        className="inline-block text-white px-6 py-3 bg-zinc-800 rounded-md hover:bg-zinc-700 transition font-semibold"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>
            <FooterHome />
        </>
    );
}
    