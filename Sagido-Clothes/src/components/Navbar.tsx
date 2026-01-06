import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Navbar = () => {
  const { config } = useNavbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
    
  }

  const shouldBeTransparent = config.variant === "transparent" && !isScrolled;

  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";

  const navBg = shouldBeTransparent
    ? "bg-transparent border-b border-transparent"
    : "bg-black/20 backdrop-blur-md border-b border-white/10";

  const textTone =
    config.tone === "light" ? "text-zinc-900" : "text-stone-200";

  return (
    <nav className={`${navBase} ${navBg} ${textTone}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center gap-2 nav-a">Explore</Link>
          <Link to="/women" className="flex items-center gap-2 nav-a ">Women</Link>
          <Link to="/men" className="flex items-center gap-2 nav-a ">Men</Link>
          <Link to="/junior" className="flex items-center gap-2 nav-a ">Junior</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsHamOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isHamOpen ? faXmark : faBars} />
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center gap-2 ">Sagido</Link>
        </div>

        {/* Right icons (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center gap-2 nav-a ">USA $</a>

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

          <a href="#" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faUser} /></a>
          <a href="#" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="flex items-center gap-2 nav-a "><FontAwesomeIcon icon={faShoppingBasket} /></a>
        </div>
      </div>

      {isSearchOpen && (
        <div className="hidden md:block border-t border-white/10 px-3 py-3">
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

      {/* Mobile dropdown */}
      <div className={`${isHamOpen ? "block" : "hidden"} md:hidden mt-3 text-center`}>
        <div className="rounded-2xl bg-black/40 backdrop-blur-md p-4 flex flex-col gap-3 text-stone-300">
          <Link to="/" onClick={() => setIsHamOpen(false)}>Explore</Link>
          <Link to="/women" onClick={() => setIsHamOpen(false)}>Women</Link>
          <Link to="/men" onClick={() => setIsHamOpen(false)}>Men</Link>
          <Link to="/junior" onClick={() => setIsHamOpen(false)}>Junior</Link>

          <div className="h-px bg-white/30 my-2" />

          <a href="#" className="text-center">
            USA $
          </a>

          
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
