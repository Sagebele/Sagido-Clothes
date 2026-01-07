
const PictureCarousel = () => {
    const images = [
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
                Featured Looks
            </h3>
            <div className="flex overflow-x-auto space-x-6">    
                {images.map((src, index) => (
                    <div key={index} className="shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
                        <img

                            src={src}
                            alt={`Featured look ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PictureCarousel;