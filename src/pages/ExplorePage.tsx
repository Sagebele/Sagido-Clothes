
import Footer from "../components/Footer"
import { useScrollAnimation } from "../Hooks/ScrollAnimation";

const ExplorePage = () => {
    const { ref, isVisible } = useScrollAnimation();


    return (
        <>
            {/* Hero Section */}
            <div 
                className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1528344130299-67249a5f2ce5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        Explore Our Collections
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">
                        Discover the latest trends and timeless styles
                    </p>
                </div>
            </div>

            {/* Clothing Collections Section */}
            <div className="bg-linear-to-b from-white to-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-zinc-800 mb-12">
                        Featured Collections
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8" 
                    ref={ref}>
                        {/* Men's Collection */}
                        <div className={`group relative overflow-hidden rounded-lg shadow-lg left-to-right-anim hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${isVisible ? "visible" : ""}`}>
                            <img 
                                src="https://images.unsplash.com/photo-1633242244592-857801ba166c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Men's Collection"
                                className="w-full h-150 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-3xl font-bold text-white">Men's Fashion</h3>
                            </div>
                        </div>

                        {/* Women's Collection */}
                        <div className={`group relative overflow-hidden rounded-lg shadow-lg right-to-left-anim hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${isVisible ? "visible" : ""}`}>
                            <img 
                                src="https://images.unsplash.com/photo-1664662803821-17402afc2597?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Women's Collection"
                                className="w-full h-150 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-3xl font-bold text-white">Women's Fashion</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ExplorePage;