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

  const closeAllDropdowns = () => {
    womenDD.closeNow();
    menDD.closeNow();
    juniorDD.closeNow();
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



const womenDD = useHoverDropdown({ closeDelay: 100, onOpen: navbarHoldSolid, onClose: navbarRelease });
const menDD = useHoverDropdown({ closeDelay: 100, onOpen: navbarHoldSolid, onClose: navbarRelease });
const juniorDD = useHoverDropdown({ closeDelay: 100, onOpen: navbarHoldSolid, onClose: navbarRelease });
const searchDD = useHoverDropdown({ closeDelay: 100, onOpen: navbarHoldSolid, onClose: navbarRelease });
const currencyDD = useHoverDropdown({ closeDelay: 100, onOpen: navbarHoldSolid, onClose: navbarRelease });



  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";

  const navBg = config.variant === "solid" || isScrolled
    ? "bg-black/20 backdrop-blur-md border-b border-white/10"
    : "bg-transparent border-b border-transparent";
  const textTone = setNavbarTextTone(config.tone);

  const textFont = "font-delius";
  const DDlinks = "text-white hover:text-black/20 nav-a font-sans"

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
            onMouseEnter={() => {
              closeAllDropdowns();
              womenDD.openNow();
            }}
            onMouseLeave={womenDD.closeLater}
          >
            <Link to={`/${currency}/women`} className="flex items-center gap-2 nav-a">
              Women
            </Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => {
              closeAllDropdowns();
              menDD.openNow();
            }}
            onMouseLeave={menDD.closeLater}
          >
            <Link to={`/${currency}/men`} className="flex items-center gap-2 nav-a">
              Men
            </Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => {
              closeAllDropdowns();
              juniorDD.openNow();
            }}
            onMouseLeave={juniorDD.closeLater}
          >
            <Link to={`/${currency}/junior`} className="flex items-center gap-2 nav-a">
              Junior
            </Link>
          </div>
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
                  className={`absolute left-1/2 transform -translate-x-1/2 top-10 w-fit ${navBg} rounded-md shadow-lg z-20 text-center font-sans`}
                  onMouseEnter={currencyDD.openNow}
                  onMouseLeave={currencyDD.closeLater}
                >
                  <div className="mb-1">
                    <button
                      onClick={() => { handleCurrency("usd"); currencyDD.closeNow(); }}
                      className="w-full px-3 py-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      USD $
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => { handleCurrency("eur"); currencyDD.closeNow(); }}
                      className="w-full px-3 py-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      EUR €
                    </button>
                  </div>
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

          <Link to="/account" 
          className="flex items-center gap-2 nav-a ">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/favorites" 
          className="flex items-center gap-2 nav-a ">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/cart" 
          className="flex items-center gap-2 nav-a ">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </Link>
        </div>
      </div>
      {/* Dropdowns */}
      {juniorDD.open && (
        <div
          className={`hidden md:block border-t border-white/10 px-3 py-4 my-4 rounded-md z-20`}
          onMouseEnter={juniorDD.openNow}
          onMouseLeave={juniorDD.closeLater}
        >
          <div className="p-4 text-white max-w-7xl mx-auto grid grid-cols-5">
            <div className="flex items-center justify-center">
              <p className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] border-r-2 border-r-black/30 [text-orientation:upright] font-sans font-semibold ">
                Junior
              </p>
            </div>
            <div className="grid gap-2">
              <Link to={`/${currency}/junior/new-collection`}
              className={`${DDlinks}`}>
                New Collection
              </Link>
              <Link to={`/${currency}/junior/summer-vibes`}
              className={`${DDlinks}`}>
                Summer Vibes
              </Link>
              <Link to={`/${currency}/junior/playful-prints`}
              className={`${DDlinks}`}>
                Playful Prints
              </Link>
              <Link to={`/${currency}/junior/school-essentials`}
              className={`${DDlinks}`}>
                School Essentials
              </Link>
            </div>
            <div
            // clothing
            className="grid gap-2">
              <Link to={`/${currency}/junior/t-shirts`}
              className={`${DDlinks}`}>
                T-Shirts
              </Link>
              <Link to={`/${currency}/junior/hoodies`}
              className={`${DDlinks}`}>
                Hoodies
              </Link>
              <Link to={`/${currency}/junior/jeans`}
              className={`${DDlinks}`}>
                Jeans
              </Link>
              <Link to={`/${currency}/junior/dresses`}
              className={`${DDlinks}`}>
                Dresses & Skirts
              </Link>
            </div>
            <div
            // accessories
            className="grid gap-2">
              <Link to={`/${currency}/junior/backpacks`}
              className={`${DDlinks}`}>
                Backpacks
              </Link>
              <Link to={`/${currency}/junior/shoes`}
              className={`${DDlinks}`}>
                Shoes & Sneakers
              </Link>
              <Link to={`/${currency}/junior/hats`}
              className={`${DDlinks}`}>
                Hats & Caps
              </Link>
              <Link to={`/${currency}/junior/jewelry`}
              className={`${DDlinks}`}>
                Fun Jewelry
              </Link>
            </div>
            <div
            // junior image
            className="flex items-center justify-center">
              <img
                src="https://i.pinimg.com/originals/a6/7d/3f/a67d3f9669444032018272ed85784955.jpg"
                alt="Junior Collection"
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      )}
      {menDD.open && (
        <div
          className={`hidden md:block border-t border-white/10 px-3 py-4 my-4 rounded-md z-20`}
          onMouseEnter={menDD.openNow}
          onMouseLeave={menDD.closeLater}
        >
          <div className="p-4 text-white max-w-7xl mx-auto grid grid-cols-5 font-sans">
            <div className="flex items-center justify-center">
              <p className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] border-r-2 border-r-black/30 [text-orientation:upright] font-sans font-semibold ">
                Men
              </p>
            </div>
            <div
            // collections
            className="grid gap-2">
              <Link to={`/${currency}/men/new-collection`}
              className={`${DDlinks}`}>
                New Collection
              </Link>
              <Link to={`/${currency}/men/winter-collection`}
              className={`${DDlinks}`}>
                Winter Collection
              </Link>
              <Link to={`/${currency}/men/sportswear`}
              className={`${DDlinks}`}>
                Sportswear
              </Link>
              <Link to={`/${currency}/men/formal-wear`}
              className={`${DDlinks}`}>
                Formal Wear
              </Link>
            </div>
            <div
            // clothing
            className="grid gap-2">
              <Link to={`/${currency}/men/shirts`}
              className={`${DDlinks}`}>
                Shirts
              </Link>
              <Link to={`/${currency}/men/t-shirts`}
              className={`${DDlinks}`}>
                T-Shirts
              </Link>
              <Link to={`/${currency}/men/trousers`}
              className={`${DDlinks}`}>
                Trousers
              </Link>
              <Link to={`/${currency}/men/jackets`}
              className={`${DDlinks}`}>
                Jackets & Coats
              </Link>
            </div>
            <div
            // accessories
            className="grid gap-2">
              <Link to={`/${currency}/men/shoes`}
              className={`${DDlinks}`}>
                Shoes
              </Link>
              <Link to={`/${currency}/men/watches`}
              className={`${DDlinks}`}>
                Watches
              </Link>
              <Link to={`/${currency}/men/ties`}
              className={`${DDlinks}`}>
                Ties & Bowties
              </Link>
              <Link to={`/${currency}/men/belts`}
              className={`${DDlinks}`}>
                Belts & Wallets
              </Link>
            </div>
            <div
            // men image
            className="flex items-center justify-center">
              <img
                src="https://s3.r29static.com/bin/entry/e1f/x%2C80/1590637/image.jpg"
                alt="Men Collection"
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      )}
      {womenDD.open && (
        <div
          className={`hidden md:block border-t border-white/10 px-3 py-4 my-4 rounded-md z-20`}
          onMouseEnter={womenDD.openNow}
          onMouseLeave={womenDD.closeLater}
        >
          <div className="p-4 text-white max-w-7xl mx-auto grid grid-cols-5">
            <div className="flex items-center justify-center">
              <p className="[writing-mode:vertical-lr] uppercase tracking-[0.35em] border-r-2 border-r-black/30 [text-orientation:upright] font-sans font-semibold ">
                Women
              </p>
            </div>
            <div
            // collections
            className="grid gap-2">
              <Link to={`/${currency}/women/spring-collection`}
              className={`${DDlinks}`}>
                Spring Collection
              </Link>
              <Link to={`/${currency}/women/summer-collection`}
              className={`${DDlinks}`}>
                Summer Collection
              </Link>
              <Link to={`/${currency}/women/essentials`}
              className={`${DDlinks}`}>
                Essentials
              </Link>
              <Link to={`/${currency}/women/denim`}
              className={`${DDlinks}`}>
                Denim Collection
              </Link>
            </div>
            <div
            // clothing
            className="grid gap-2">
              <Link to={`/${currency}/women/dresses`}
              className={`${DDlinks}`}>
                Dresses
              </Link>
              <Link to={`/${currency}/women/tops`}
              className={`${DDlinks}`}>
                Tops
              </Link>
              <Link to={`/${currency}/women/bottoms`}
              className={`${DDlinks}`}>
                Bottoms
              </Link>
              <Link to={`/${currency}/women/outerwear`}
              className={`${DDlinks}`}>
                Outerwear
              </Link>
            </div>
            <div
            // accessories
            className="grid gap-2">
              <Link to={`/${currency}/women/bags`}
              className={`${DDlinks}`}>
              </Link>
              <Link to={`/${currency}/women/shoes`}
              className={`${DDlinks}`}>
                Shoes
              </Link>
              <Link to={`/${currency}/women/jewelry`}
              className={`${DDlinks}`}>
                Jewelry
              </Link>
              <Link to={`/${currency}/women/accessories`}
              className={`${DDlinks}`}>
                Accessories
              </Link>
            </div>
            <div
            // woman image
            className="flex items-center justify-center">
              <img
                src="https://www.refinery29.com/images/11085368.jpg?crop=3306%2C3968%2Cx4%2Cy675&format=webp&height=912&quality=85&width=760"
                alt="Women Collection"
                className="w-full h-full object-cover hover:scale-105 duration-300"
              />
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
                  Shop Urban
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
                  alt="Classic fashion 2" 
                  className="w-full h-full object-cover hover:scale-105 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
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
          <Link to={`/${currency}/explore`} onClick={() => setIsHamOpen(false)}>Explore</Link>
          <Link to={`/${currency}/women`} onClick={() => setIsHamOpen(false)}>Women</Link>
          <Link to={`/${currency}/men`} onClick={() => setIsHamOpen(false)}>Men</Link>
          <Link to={`/${currency}/junior`} onClick={() => setIsHamOpen(false)}>Junior</Link>

          <div className="h-px bg-white/30 my-2" />

          <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <span
              onClick={() => {setIsCurrencyOpen((v) => !v);}}
              className={`${isCurrencyOpen ? "hidden" : "block"} cursor-pointer`}
            >
              {currencyLabel}
            </span>
            <div 
              className={`${isCurrencyOpen ? "block" : "hidden"} flex flex-row rounded-sm p-2`}
            >
              <button
              className="px-4 py-2 text-left hover:{navBar} rounded cursor-pointer"
              onClick={() => handleCurrency("usd")}
            >
              USD $
            </button>
            <button
              className="px-4 py-2 text-left hover:bg-white/10 rounded cursor-pointer"
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
            
            <Link to="/account" 
            className="flex items-center">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/favorites" 
            className="flex items-center">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/cart" 
            className="flex items-center">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Link>
            
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
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white
                 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


