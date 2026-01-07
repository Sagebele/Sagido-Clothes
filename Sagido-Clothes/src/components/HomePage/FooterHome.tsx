import { faFacebook, faInstagram, faPinterest, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const FooterHome = () => {

    return (
        <div   >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="footer-about flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-zinc-900 border-b border-zinc-900 pb-2">About</h2>
                        </div>
                        <div className="flex flex-col gap-2 text-center items-center justify-center">
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">About Us</a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="footer-help flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-zinc-900 border-b border-zinc-900 pb-2">Help</h2>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">Contact Us</a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">Shipping Information</a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">Returns & Exchanges</a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 nav-a transition">FAQs</a>
                        </div>
                    </div>

                    <div className="footer-joinUs flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-zinc-900 border-b border-zinc-900 pb-2">Join Us</h2>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <a href="#" className="text-gray-500 hover:text-zinc-900 transition text-xl">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 transition text-xl">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 transition text-xl">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-zinc-900 transition text-xl">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-newsletter flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-zinc-900 border-b border-zinc-900 pb-2">Newsletter</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <form className="flex flex-col gap-2"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // Handle form submission logic here
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-3 py-2 rounded-md border text-zinc-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 text-sm"
                                />
                                <button 
                                    type="submit"
                                    className="px-4 py-2 text-sm font-semibold text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition hover:cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-20 border-t border-gray-300 pb-5 pt-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex md:flex-row flex-col items-center justify-center gap-4">
                            <a href="#" className="text-gray-500 hover:text-gray-900 nav-a">© 2026 Sagido Clothes</a>

                            <span className="hidden md:inline-block text-zinc-900 pointer-events-none">|</span>
                            <span className="block md:hidden w-50 h-px bg-zinc-900 my-2 pointer-events-none" aria-hidden="true" />

                            <a href="#" className="text-gray-500 hover:text-gray-900 nav-a">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterHome;