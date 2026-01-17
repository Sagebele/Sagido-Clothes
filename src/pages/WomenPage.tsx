import { useState } from "react";
import Footer from "../components/Footer";
import womenBackground from "../assets/images/women-clothing/background.jpg";
import ClothingCards from "../components/clothingCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


const WomenPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [sortBy, setSortBy] = useState<string>("newest");

    const categories = [
        { value: "hoodie", label: "Hoodies" },
        { value: "jacket", label: "Jackets" },
        { value: "dress", label: "Dresses" },
        { value: "t-shirt", label: "T-Shirts" },
    ];

    const handleCategoryChange = (value: string) => {
        setSelectedCategories(prev => 
            prev.includes(value) 
                ? prev.filter(cat => cat !== value)
                : [...prev, value]
        );
    };


    return (
        <>
            <div 
                className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-centerpy-20"
                style={{
                    backgroundImage: `url("${womenBackground}")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
                        Women Clothing
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-100 drop-shadow-md max-w-2xl">
                        Discover our exclusive women's collection
                    </p>
                </div>
            </div>
            <h2 className="m-10 text-zinc-900 font-bold text-center text-3xl">
                Featured Item
            </h2>
            
            <div className="lg:hidden flex justify-center mb-4">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 bg-black/30 backdrop-blur-md text-white rounded-md hover:bg-zinc-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Filters & Sort</span>
                </button>
            </div>

            <div className="min-h-screen flex flex-col lg:flex-row">
                <div className={`
                    flex flex-col items-center
                    lg:mx-10 lg:block lg:items-start
                    ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}
                    w-full lg:w-auto
                    px-4 lg:px-0
                    mb-6 lg:mb-0
                    bg-gray-50 lg:bg-transparent
                    py-4 lg:py-0
                `}>
                    <h2 className=" text-zinc-900 font-medium text-xl mb-8">
                        Sort By
                    </h2>
                    <select className="w-full lg:w-64 text-zinc-900 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            // setIsMobileMenuOpen(false);
                        }}
                        id="sortingSelect"
                    >
                        <option value="newest">Newest Arrivals</option>
                        <option value="priceLowHigh">Price: Low to High</option>    
                        <option value="priceHighLow">Price: High to Low</option>
                    </select>
                    <h2 className=" text-zinc-900 font-medium text-xl mb-8">
                        Filter By
                    </h2>
                    <div className="relative mb-8 w-full lg:w-64">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="w-full text-left text-zinc-900 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white flex justify-between items-center"
                        >
                            <span>
                                {selectedCategories.length === 0 
                                    ? "Select categories" 
                                    : `${selectedCategories.length} selected`}
                            </span>
                            <svg 
                                className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isFilterOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg">
                                <div className="flex flex-col gap-2 p-3">
                                    {categories.map((category) => (
                                        <label 
                                            key={category.value} 
                                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
                                        >
                                            <input
                                                id={`categoryCheckbox-${category.value}`}
                                                type="checkbox"
                                                value={category.value}
                                                checked={selectedCategories.includes(category.value)}
                                                onChange={() => handleCategoryChange(category.value)}
                                                className="w-4 h-4 text-zinc-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                                            />
                                            <span className="text-zinc-900">{category.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex-1 w-full px-4 lg:px-0">
                    <ClothingCards 
                        selectedCategories={selectedCategories}
                        sortBy={sortBy}
                    />
                </div>
            </div>
            
            <Footer />
        </>
    );
};


export default WomenPage;
