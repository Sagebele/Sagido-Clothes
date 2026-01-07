import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUndo, faHeadset } from "@fortawesome/free-solid-svg-icons";

const Information = () => {

    return (    
        <div className="py-8 mb-25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>   
                        <FontAwesomeIcon icon={faTruck} className="text-4xl text-zinc-900 mb-2 mx-auto" />
                        <h4 className="text-zinc-800 text-lg font-semibold mb-1">Free Shipping</h4>
                        <p className="text-zinc-700 text-base">Enjoy free shipping on all orders over $50 within the USA.</p>
                    </div>
                <div>   
                    <FontAwesomeIcon icon={faUndo} className="text-4xl text-zinc-900 mb-2 mx-auto" />
                    <h4 className="text-zinc-800 text-lg font-semibold mb-1">Easy Returns</h4>
                    <p className="text-zinc-700 text-base">Hassle-free returns within 30 days of purchase.</p>
                </div>
                <div>   
                    <FontAwesomeIcon icon={faHeadset} className="text-4xl text-zinc-900 mb-2 mx-auto" />
                    <h4 className="text-zinc-800 text-lg font-semibold mb-1">Customer Service</h4>
                    <p className="text-zinc-700 text-base">Our customer service team is here to help you anytime through email.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Information;

