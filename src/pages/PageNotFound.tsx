import { Link, useParams } from "react-router-dom";
import FooterHome from "../components/Footer";

export default function PageNotFound() {
    const { currency = "eur" } = useParams<{ currency?: string }>();


    return (
        <>
            <section className="relative w-full min-h-screen flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-8xl md:text-9xl font-bold text-zinc-900 mb-4">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
                        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                    <Link 
                        to={`/${currency}`}
                        className="inline-block text-white px-8 py-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition font-semibold text-lg"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
            <FooterHome />
        </>
    );
}