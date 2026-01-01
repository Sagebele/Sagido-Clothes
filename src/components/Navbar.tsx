import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md px-3 py-4">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center gap-2">
            Explore
          </a>
          <a href="#" className="flex items-center gap-2">
            Women
          </a>
          <a href="#" className="flex items-center gap-2">
            Men
          </a>
          <a href="#" className="flex items-center gap-2">
            Junior
          </a>
        </div>

        <div className="text-white text-2xl font-bold">
          <a href="#" className="flex items-center gap-2">
            Sagido
          </a>

        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center gap-2">
            USA $
          </a>
          <a href="#" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSearch}/>
          </a>
          <a href="#" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;