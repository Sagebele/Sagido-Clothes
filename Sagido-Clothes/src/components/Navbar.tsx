import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingBasket, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import "../styles/Header.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHam = () => {
    setIsHamOpen(!isHamOpen);
  }

    

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50  px-3 py-4 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-zinc-900 nav-a">Explore</a>
          <a href="#" className="text-zinc-900 nav-a">Women</a>
          <a href="#" className="text-zinc-900 nav-a">Men</a>
          <a href="#" className="text-zinc-900 nav-a">Junior</a>
        </div>

        <div className="pl-8 md:pl-0 text-2xl font-semibold md:text-3xl text-zinc-900 hover:cursor-pointer  transition">
          <a href="#">Sagido</a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-zinc-900 nav-a">USA $</a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faShoppingBasket} /></a>
        </div>
        <div className="md:hidden items-center space-x-4" >
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faShoppingBasket} /></a>
          <button
            className="text-zinc-900 p-2 rounded-lg hover:bg-white/10"
            aria-label="Open menu"
            onClick={handleHam}
          >
            {isHamOpen ? (<FontAwesomeIcon icon={faX} />) : <FontAwesomeIcon icon={faBars} />}
          </button>
          <div className={`absolute text-center top-16 right-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg py-4 w-48 
            transition-transform duration-300 ${isHamOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0 pointer-events-none'}`
            }>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a">Explore</a>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a">Women</a>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a">Men</a>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a">Junior</a>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a">USA $</a>
            <a href="#" className="block px-4 py-2 text-zinc-900 nav-a"><FontAwesomeIcon icon={faUser} />   </a>
          </div>

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;