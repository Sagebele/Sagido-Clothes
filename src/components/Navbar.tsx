import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingBasket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { setNavbarTextTone, useNavbar } from "../context/useNavbar";
import { useHoverDropdown } from "../Hooks/HoverDropdown";

type Currency = "eur" | "usd";

const CURRENCY_LABEL: Record<Currency, string> = {
  eur: "EUR €",
  usd: "USD $",
};



const Navbar = () => {
  const { config, setNavbar } = useNavbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currency: currencyParam } = useParams<{ currency?: string }>();

  const currency: Currency = currencyParam === "usd" ? "usd" : "eur";
  const currencyLabel = CURRENCY_LABEL[currency];


  const openCountRef = useRef(0);

  const navbarHoldSolid = () => {
    openCountRef.current += 1;
    setNavbar({ variant: "solid" });
  };

  const navbarRelease = () => {
    openCountRef.current = Math.max(0, openCountRef.current - 1);
    if (openCountRef.current === 0) {
      setNavbar({ variant: "transparent" });
    }
  };



  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const mbHandleSearch = () => {
    const next = !isSearchOpen;
    setIsSearchOpen(next);
  }

  const handleCurrency = (to: Currency) => {
    setIsCurrencyOpen(false);

    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);

    if (segments[0] === "eur" || segments[0] === "usd") {
      segments[0] = to;
    } else {
      segments.unshift(to);
    }

    const nextPath = "/" + segments.join("/") + location.search;
    navigate(nextPath, { replace: true });
};



const womenDD = useHoverDropdown({ closeDelay: 150, onOpen: navbarHoldSolid, onClose: navbarRelease });
const searchDD = useHoverDropdown({ closeDelay: 150, onOpen: navbarHoldSolid, onClose: navbarRelease });
const currencyDD = useHoverDropdown({ closeDelay: 200, onOpen: navbarHoldSolid, onClose: navbarRelease });



  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";

  const navBg = config.variant === "solid" || isScrolled
    ? "bg-black/20 backdrop-blur-md border-b border-white/10"
    : "bg-transparent border-b border-transparent";
  const textTone = setNavbarTextTone(config.tone);

  const textFont = "font-delius";

  return (
    <nav className={`${navBase} ${navBg} ${textTone} ${textFont}`}>
      <div className="max-w-7xl mx-auto flex items-center md:justify-between py-2 relative">
        <div className="hidden md:flex items-center space-x-8">
          <Link to={`/${currency}/explore`} 
            className="flex items-center gap-2 nav-a">
            Explore
          </Link>
          <div
            className="relative"
            onMouseEnter={womenDD.openNow}
            onMouseLeave={womenDD.closeLater}
          >
            <Link to={`/${currency}/women`} className="flex items-center gap-2 nav-a">
              Women
            </Link>
          </div>
          <Link to={`/${currency}/men`} className="flex items-center gap-2 nav-a ">Men</Link>
          <Link to={`/${currency}/junior`} className="flex items-center gap-2 nav-a ">Junior</Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsHamOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isHamOpen ? faXmark : faBars} />
        </button>

        <div className="text-2xl font-bold z-10">
          <Link to={`/${currency}`} className="flex items-center">Sagido</Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="group relative"
              onMouseEnter={currencyDD.openNow}
              onMouseLeave={currencyDD.closeLater}
            >
              <span className="flex items-center gap-2 nav-a p-1 cursor-pointer">
                {currencyLabel}
              </span>

              {currencyDD.open && (
                <div
                  className={`absolute right-0 my-3 w-fit ${navBg} backdrop-blur-md rounded-md shadow-lg z-20`}
                  onMouseEnter={currencyDD.openNow}
                  onMouseLeave={currencyDD.closeLater}
                >
                  <button onClick={() => { handleCurrency("usd"); currencyDD.closeNow(); }}>
                    USD $
                  </button>
                  <button onClick={() => { handleCurrency("eur"); currencyDD.closeNow(); }}>
                    EUR €
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="relative flex items-center">
            <button
              type="button"
              onMouseEnter={searchDD.openNow}
              onMouseLeave={searchDD.closeLater}
              className="flex items-center gap-2 nav-a p-1"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <Link to="/account" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faUser} /></Link>
          <Link to="/favorites" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faHeart} /></Link>
          <Link to="/cart" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faShoppingBasket} /></Link>
        </div>
      </div>
      
      {womenDD.open && (
              <div
                className={`hidden md:block border-t border-white/10 px-3 py-4 my-4 backdrop-blur-md rounded-md shadow-lg z-20`}
                onMouseEnter={womenDD.openNow}
                onMouseLeave={womenDD.closeLater}
              >
                <div className="p-4 text-white max-w-7xl mx-auto grid grid-cols-3">
                  <div className="flex items-center justify-center">
                    <p className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] border-r-2 border-r-black [text-orientation:upright] font-sans font-semibold ">
                      Women
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Link to={`/${currency}/women/new`} className="hover:text-white">
                      New arrivals
                    </Link>
                    <Link to={`/${currency}/women/shoes`} className="hover:text-white">
                      Shoes
                    </Link>
                    <Link to={`/${currency}/women/clothing`} className="hover:text-white">
                      Clothing
                    </Link>
                  </div>
                </div>
              </div>
            )}
      {searchDD.open && (
        <div
          onMouseEnter={searchDD.openNow}
          onMouseLeave={searchDD.closeLater}
          className="hidden md:block border-t border-white/10 px-3 py-4 my-4"
        >
          <div className="max-w-7xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim();
                if (q) {
                  navigate(`/search?q=${encodeURIComponent(q)}`);
                  setIsSearchOpen(false);
                }
              }}
            >
              <input
                type="text"
                id="desktop-search"
                name="desktop-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                aria-label="Search"
                className="w-full px-4 py-2 rounded-md bg-white/10 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                autoFocus
              />
            </form>
          </div>
          <div className="max-w-7xl mx-auto my-4 py-10 flex flex-row gap-5 items-center justify-center text-center ">
            {/* left Section */}
            <div className="hover:text-white transition-colors duration-300 text-stone-400 flex flex-row items-center justify-center px-4 gap-4">
              <div className="border-r-2 border-r-black/30 cursor-pointer">
                <span className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] [text-orientation:upright]  font-sans font-semibold ">
                  Shop Street
                </span>
              </div>
              <div className="w-50 h-90 overflow-hidden rounded-sm cursor-pointer hover:shadow-lg transition-shadow duration-500 relative group">
                <img 
                src="https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWV0d2VhcnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
                alt="Street fashion 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 absolute inset-0" 
                />
                <img 
                src="https://cdn.shopify.com/s/files/1/0445/3587/3698/files/1_e1ae1f8e-4a02-46f5-81f2-2b19c955ebab.jpg?v=1720077472"
                alt="Street fashion 2" 
                className="w-full h-full object-cover cursor-pointer hover:scale-105 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
              </div>
            </div>
            {/* middle section */}
            <div className="flex flex-col items-center justify-center px-4 gap-4 text-stone-400 hover:text-white transition-colors duration-300">
              <div 
              className="mt-10 w-60 h-100 overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-500 relative group"
              >
                <img 
                src="https://down-ph.img.susercontent.com/file/0a36744402860011f0649154dbf73f83" 
                alt="Urban fashion 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 absolute inset-0" />
                <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVucyUyMHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
                alt="Urban fashion 2" 
                className="w-full h-full object-cover absolute inset-0 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center justify-center cursor-pointer border-t-2 border-t-black/30">
                <span className="uppercase tracking-[0.35em] font-sans font-semibold ">
                  Shop Street
                </span>
              </div>
            </div>
            {/* right section */}
            <div className="text-stone-400 flex flex-row items-center justify-center px-4 gap-4 hover:text-white transition-colors duration-300">
              <div 
              className="w-50 h-90 overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-500 relative group"
              >
                <img 
                  src="https://efaarvintage.com/cdn/shop/files/397994624_890250849420106_6702366664980599936_n.jpg?v=1706069025&width=1600" 
                  alt="Classic fashion 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 absolute inset-0" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1762342677678-5f73eee013ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Classic fashion 2" className="w-full h-full object-cover hover:scale-105 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
              </div>
              <div className="border-l-2 border-l-black/30 cursor-pointer">
                <span className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] [text-orientation:upright] font-sans font-semibold ">
                  Shop Classics
                </span>
              </div>
            </div>  
          </div>
        </div>
      )}

      <div className={`${isHamOpen ? "block" : "hidden"} md:hidden mt-3 text-center`}>
        <div className="rounded-2xl bg-black/40 backdrop-blur-md p-4 flex flex-col gap-3 text-stone-300">
          <Link to="/" onClick={() => setIsHamOpen(false)}>Explore</Link>
          <Link to="/women" onClick={() => setIsHamOpen(false)}>Women</Link>
          <Link to="/men" onClick={() => setIsHamOpen(false)}>Men</Link>
          <Link to="/junior" onClick={() => setIsHamOpen(false)}>Junior</Link>

          <div className="h-px bg-white/30 my-2" />

          <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <span
              onClick={() => {setIsCurrencyOpen((v) => !v);}}
              className={`${isCurrencyOpen ? "hidden" : "block"} cursor-pointer`}
            >
              {currencyLabel}
            </span>
            <div 
              // ref={currencyDropdownRef}
              className={`${isCurrencyOpen ? "block" : "hidden"} flex flex-row rounded-sm p-2`}
            >
              <button
              className="px-4 py-2 text-left hover:bg-white/10 rounded"
              onClick={() => handleCurrency("usd")}
            >
              USD $
            </button>
            <button
              className="px-4 py-2 text-left hover:bg-white/10 rounded"
              onClick={() => handleCurrency("eur")}
            >
              EUR €
            </button>
          </div>
          </div>

          
          <div className="flex items-center justify-center gap-6 pt-2">
            <span
              onClick={mbHandleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </span>
            
            <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
            <a href="#"><FontAwesomeIcon icon={faShoppingBasket} /></a>
            
          </div>
          {isSearchOpen && (
            <div className="mt-2">
              <input
                type="text"
                id="mobile-search"
                name="mobile-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const q = query.trim();
                    if (q) {
                      navigate(`/search?q=${encodeURIComponent(q)}`);
                      setIsHamOpen(false);
                      setIsSearchOpen(false);
                    }
                  }
                }}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


