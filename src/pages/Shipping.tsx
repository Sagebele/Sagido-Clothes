import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import FooterHome from "../components/Footer";
import { useScrollAnimation } from "../Hooks/ScrollAnimation";
import { getCurrencyPath } from "../utils/currencyHelper";
import { Link } from "react-router-dom";

const ShippingItem = ({ item }: { item: { id: number; title: string; content: string } }) => {
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

const SHIPPING_ITEMS = [
    {
        id: 1,
        title: "Shipping Policies",
        content: "We offer worldwide shipping with various options to suit your needs. Orders are processed within 1-2 business days and shipping times vary based on your location and selected shipping method.",
    },
    {
        id: 2,
        title: "Delivery Times",
        content: "Standard shipping typically takes 5-10 business days, while expedited options are available for faster delivery. Please note that delivery times may be affected by customs processing in your country.",
    },
    {
        id: 3,
        title: "Order Tracking",
        content: "Once your order is shipped, you will receive a tracking number via email. You can use this number to monitor the status of your delivery through our shipping partner's website.",
    },
    {
        id: 4,
        title: "Shipping Costs",
        content: "Shipping costs are calculated at checkout based on your location and the weight of your order. We occasionally offer free shipping promotions, so be sure to subscribe to our newsletter for updates.",
    },
];

export default function Shipping() {
    const { setNavbar, resetNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid" });
        window.scrollTo(0, 0);
        return () => resetNavbar();
    }, [setNavbar, resetNavbar]);

    return (
        <>
            <section className="relative w-full h-[55dvh] flex items-start justify-start ">
                <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shipping Information Background"
                    className=" w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h2>
                    <span className="absolute top-1/2 left-1/2 z-10 text-5xl md:text-6xl font-bold text-white drop-shadow-lg -translate-x-1/2 -translate-y-1/2">
                        Shipping Information
                    </span>
                </h2>
            </section>
            <section className="bg-black/10 backdrop-blur-lg border-t border-white/20">
                <div className="relative z-10 w-full py-20 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-lg font-bold text-black-100 drop-shadow-md text-zinc-800">
                                Learn about our shipping policies, delivery times, and how we ensure your order arrives safely.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {SHIPPING_ITEMS.map((item) => (
                                <ShippingItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-16 p-8 bg-white/20 backdrop-blur-sm rounded-lg text-center border border-white/20   ">
                    <h2 className="text-2xl font-bold mb-3 text-zinc-900">
                        Don't see your question?
                    </h2>
                    <p className="text-zinc-800 mb-4 ">
                        Contact our support team for further assistance.
                    </p>
                    <Link to={getCurrencyPath("/contactus")}
                        className="inline-block text-white px-6 py-3 bg-zinc-800  rounded-md hover:bg-zinc-700 transition font-semibold"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>
            <FooterHome />
        </>
    );
}