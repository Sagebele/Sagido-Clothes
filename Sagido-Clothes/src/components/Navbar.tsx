import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const shouldBeTransparent = config.variant === "transparent" && !isScrolled;

  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";
  const navBg = shouldBeTransparent
    ? "bg-transparent border-b border-transparent"
    : "bg-black/20 backdrop-blur-md border-b border-white/10";

  const textTone =
    config.tone === "light" ? "text-stone-200" : "text-zinc-900 dark:text-stone-200";

  return (
    <nav className={`${navBase} ${navBg} ${textTone}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex items-center gap-2 nav-a text-zinc-900">Explore</Link>
          <Link to="/women" className="flex items-center gap-2 nav-a text-zinc-900">Women</Link>
          <Link to="/men" className="flex items-center gap-2 nav-a text-zinc-900">Men</Link>
          <Link to="/junior" className="flex items-center gap-2 nav-a text-zinc-900">Junior</Link>
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
          <Link to="/" className="flex items-center gap-2 text-zinc-900">Sagido</Link>
        </div>

        {/* Right icons (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center gap-2 nav-a text-zinc-900">USA $</a>
          <a href="#" className="flex items-center gap-2 nav-a text-zinc-900"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="flex items-center gap-2 nav-a text-zinc-900"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#" className="flex items-center gap-2 nav-a text-zinc-900"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="flex items-center gap-2 nav-a text-zinc-900"><FontAwesomeIcon icon={faShoppingBasket} /></a>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`${isHamOpen ? "block" : "hidden"} md:hidden mt-3`}>
        <div className="rounded-2xl bg-black/40 backdrop-blur-md p-4 flex flex-col gap-3 text-zinc-900">
          <Link to="/" onClick={() => setIsHamOpen(false)}>Explore</Link>
          <Link to="/women" onClick={() => setIsHamOpen(false)}>Women</Link>
          <Link to="/men" onClick={() => setIsHamOpen(false)}>Men</Link>
          <Link to="/junior" onClick={() => setIsHamOpen(false)}>Junior</Link>

          <div className="h-px bg-white/20 my-2" />

          <a href="#" className="flex items-center justify-between">
            USA $
            <span className="opacity-70">▼</span>
          </a>

          <div className="flex items-center gap-6 pt-2">
            <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
            <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
            <a href="#"><FontAwesomeIcon icon={faShoppingBasket} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
