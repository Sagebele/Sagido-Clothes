import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-3 py-4">
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-white/70">Explore</a>
          <a href="#" className="text-white hover:text-white/70">Women</a>
          <a href="#" className="text-white hover:text-white/70">Men</a>
          <a href="#" className="text-white hover:text-white/70">Junior</a>
        </div>

        <div className="pl-8 md:pl-0 text-2xl font-bold md:text-white">
          <a href="#">Sagido</a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-white/70">USA $</a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faShoppingBasket} /></a>
        </div>
        <div className="md:hidden items-center space-x-4" >
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-white hover:text-white/70"><FontAwesomeIcon icon={faShoppingBasket} /></a>
          <button
            className="text-white p-2 rounded-lg hover:bg-white/10"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;