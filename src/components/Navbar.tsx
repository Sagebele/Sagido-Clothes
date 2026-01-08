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
import { useNavbar } from "../context/useNavbar";

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

  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<number | null>(null);


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleSearchClick = () => {
    const next = !isSearchOpen;
    setIsSearchOpen(next);
    setNavbar({ variant: next ? "transparent" : "solid" });
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


  const openCurrencyDropdown = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsCurrencyOpen(true);
  };
  const closeCurrencyDropdown = () => {
    closeTimeout.current = window.setTimeout(() => {
      setIsCurrencyOpen(false);
    }, 200);
  };
  const shouldBeTransparent = config.variant === "transparent" && !isScrolled;

  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";

  const navBg = shouldBeTransparent
    ? "bg-transparent border-b border-transparent"
    : "bg-black/20 backdrop-blur-md border-b border-white/10";

  const textTone =
    config.tone === "light" ? "text-zinc-900" : "text-stone-200";

  const textFont = "font-delius";

  return (
    <nav className={`${navBase} ${navBg} ${textTone} ${textFont}`}>
      <div className="max-w-7xl mx-auto flex items-center md:justify-between py-2 relative">
        <div className="hidden md:flex items-center space-x-8">
          <Link to={`/${currency}/explore`} className="flex items-center gap-2 nav-a">Explore</Link>
          <Link to={`/${currency}/women`} className="flex items-center gap-2 nav-a ">Women</Link>
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

        <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link to={`/${currency}`} className="flex items-center">Sagido</Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div
            className="group relative"
            onMouseEnter={openCurrencyDropdown}
            onMouseLeave={closeCurrencyDropdown}
          >
            <span className="flex items-center gap-2 nav-a p-1 cursor-pointer">
              {currencyLabel}
            </span>

            {isCurrencyOpen && (
              <div
                ref={currencyDropdownRef}
                className={`absolute right-0 mt-3 w-fit ${navBg} backdrop-blur-md rounded-md shadow-lg z-20`}
              >
                <button
                  className="w-full px-4 py-2 text-center hover:bg-white/10 rounded-t-md"
                  onClick={() => handleCurrency("usd")}
                >
                  USD $
                </button>
                <button
                  className="w-full px-4 py-2 text-center hover:bg-white/10 rounded-b-md"
                  onClick={() => handleCurrency("eur")}
                >
                  EUR €
                </button>
              </div>
            )}
          </div>

          <div className="relative flex items-center">
            <button
              type="button"
              onClick={handleSearchClick}
              aria-label="Toggle search"
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

      {isSearchOpen && (
        <div className="hidden md:block border-t border-white/10 px-3 py-4 mt-4">
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
              ref={currencyDropdownRef}
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
              onClick={handleSearchClick}
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


