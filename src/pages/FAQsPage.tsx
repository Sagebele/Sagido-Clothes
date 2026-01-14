import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";
import FooterHome from "../components/Footer";
import { Link } from "react-router-dom";
import { getCurrencyPath } from "../utils/currencyHelper";
import { useScrollAnimation } from "../Hooks/ScrollAnimation";
import "../styles/ScrollAnimation.css";

const FAQItem = ({ faq }: { faq: { id: number; question: string; answer: string } }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <details
            key={faq.id}
            ref={ref}
            className={`group border border-white/20 rounded-lg p-6 bg-black/50 backdrop-blur-lg hover:border-white/30 transition-colors scroll-fade-in ${isVisible ? "visible" : ""}`}
        >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-white group-open:text-zinc-400">
                <h3 className="text-lg">
                    {faq.question}
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform duration-300">
                    +
                </span>
            </summary>
            <p className="text-zinc-900 mt-4 leading-relaxed">
                {faq.answer}
            </p>
        </details>
    );
};

const FAQ_ITEMS = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all items in their original condition with tags attached. Refunds are processed within 5-7 business days.",
    },
    {
        id: 2,
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days. International orders may take 10-15 business days.",
    },
    {
        id: 3,
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location.",
    },
    {
        id: 4,
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email that you can use to track your package in real-time.",
    },
    {
        id: 5,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and digital wallets like Apple Pay and Google Pay.",
    },
    {
        id: 6,
        question: "Are my personal details secure?",
        answer: "Yes, we use industry-standard SSL encryption to protect your personal and payment information. Your privacy is our priority.",
    },
];

const FAQsPage = () => {
    const { setNavbar, resetNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid", tone: "light" });
        window.scrollTo(0, 0);
        return () => resetNavbar();
    }, [setNavbar, resetNavbar]);

    return (
        <>
            <section className="relative w-full h-[55dvh] flex items-start justify-start ">
                <img 
                    src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="FAQ Background" 
                    className=" w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h2>
                    <span className="absolute top-1/2 left-1/2 z-10 text-5xl md:text-6xl font-bold text-white drop-shadow-lg -translate-x-1/2 -translate-y-1/2">
                        FAQs
                    </span>
                </h2>
                
            </section>    
            <section className="bg-black/10 backdrop-blur-lg border-t border-white/20">
                <div className="relative z-10 w-full py-20 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-lg font-bold text-black-100 drop-shadow-md text-zinc-800">
                                Find answers to common questions about our products, shipping, and policies.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {FAQ_ITEMS.map((faq) => (
                                <FAQItem key={faq.id} faq={faq} />
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-white/20 backdrop-blur-sm rounded-lg text-center border border-white/20   ">
                            <h2 className="text-2xl font-bold mb-3 text-zinc-900">
                                Can't find what you're looking for?
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
                    </div>
                </div>
            </section>
                
            <FooterHome />
        </>
    );
};

export default FAQsPage;
