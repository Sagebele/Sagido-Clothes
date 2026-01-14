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

import { useNavbar } from "../../context/useNavbar";
import { useNavbarDropdowns } from "../../Hooks/Navbar/NavbarDropdowns";
import { useCurrencyRouting } from "../../Hooks/Navbar/CurrencyRouting";
import { useCart } from "../../context/useCart";
import { menDropdownConfig, womenDropdownConfig, juniorDropdownConfig } from "./DropsConfig";
import { MainDropdown } from "./MainDropdown";
import { getCurrencyPath } from "../../utils/currencyHelper";

const Navbar = () => {
  const { cartIconRef, favoritesIconRef, count } = useCart();
  const { config } = useNavbar();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);

  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const {
    currency,
    currencyLabel,
    isMobileCurrencyOpen,
    setIsMobileCurrencyOpen,
    setCurrency,
  } = useCurrencyRouting();

  const dds = useNavbarDropdowns();


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = config.variant === "solid" || isScrolled;

  const navBase =
    "fixed top-0 left-0 right-0 z-50 px-3 py-4 transition-all duration-300";
  const navBg = isSolid
    ? "bg-black/30 backdrop-blur-md border-b border-white/10"
    : "bg-black/10 border-b border-transparent";

  const textFont = "font-delius";
  const DDlinks = "text-white nav-a font-sans cursor-pointer";

  const submitSearch = (qRaw: string) => {
    const q = qRaw.trim();
    if (!q) return;

    navigate(`/${currency}/search?q=${encodeURIComponent(q)}`);

    setQuery("");
    dds.search.closeNow(); 
    setIsMobileSearchOpen(false); 
    setIsHamOpen(false);
  };

  return (
    <nav className={`${navBase} ${navBg} text-white ${textFont}`}>
      <div className="max-w-7xl mx-auto flex items-center md:justify-between py-2 relative">
        {/* Left (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to={getCurrencyPath("/explore")} className="flex items-center gap-2 nav-a" onClick={dds.closeAll}>
            Explore
          </Link>

          <div
            className="relative"
            onMouseEnter={() => {
              dds.closeAll();
              dds.women.openNow();
            }}
            onMouseLeave={dds.women.closeLater}
          >
            <Link to={getCurrencyPath("/women")} className="flex items-center gap-2 nav-a" 
            onClick={dds.closeAll}>
              Women
            </Link>
          </div>

          <div
            className="relative"
            onMouseEnter={() => {
              dds.closeAll();
              dds.men.openNow();
            }}
            onMouseLeave={dds.men.closeLater}
          >
            <Link to={getCurrencyPath("/men")} className="flex items-center gap-2 nav-a" 
            onClick={dds.closeAll}>
              Men
            </Link>
          </div>

          <div
            className="relative"
            onMouseEnter={() => {
              dds.closeAll();
              dds.junior.openNow();
            }}
            onMouseLeave={dds.junior.closeLater}
          >
            <Link to={getCurrencyPath("/junior")} className="flex items-center gap-2 nav-a" 
            onClick={dds.closeAll}>
              Junior
            </Link>
          </div>
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
        <div className="text-2xl font-bold z-10">
          <Link to={getCurrencyPath("/")} className="flex items-center">
            Sagido
          </Link>
        </div>

        {/* Right (desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Currency dropdown */}
          <div
            className="group relative"
            onMouseEnter={dds.currency.openNow}
            onMouseLeave={dds.currency.closeLater}
          >
            <span className="flex items-center gap-2 nav-a p-1 cursor-pointer">
              {currencyLabel}
            </span>

            {dds.currency.open && (
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 top-10 w-fit ${navBg} rounded-md shadow-lg z-20 text-center font-sans`}
                onMouseEnter={dds.currency.openNow}
                onMouseLeave={dds.currency.closeLater}
              >
                <div className="mb-1">
                  <button
                    onClick={() => {
                      localStorage.setItem("currency", "usd");
                      setCurrency("usd");
                      dds.currency.closeNow();
                    }}
                    className="w-full px-3 py-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    USD $
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      localStorage.setItem("currency", "eur");
                      setCurrency("eur");
                      dds.currency.closeNow();
                    }}
                    className="w-full px-3 py-1 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    EUR €
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search icon */}
          <div className="relative flex items-center">
            <button
              type="button"
              onMouseEnter={dds.search.openNow}
              onMouseLeave={dds.search.closeLater}
              className="flex items-center gap-2 nav-a p-1"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <Link to={getCurrencyPath("/account")} className="flex items-center gap-2 nav-a">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div
            ref={favoritesIconRef}
            className="flex items-center"
          >
            <Link to={getCurrencyPath("/favorites")} className="flex items-center gap-2 nav-a">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>

          <div
            ref={cartIconRef}
            className="flex items-center"
          >
            <Link
              to={getCurrencyPath("/cart")}
              className="flex items-center gap-2 nav-a relative"
              onMouseEnter={dds.cart.openNow}
              onMouseLeave={dds.cart.closeLater}
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <MainDropdown
        open={dds.junior.open}
        config={juniorDropdownConfig(currency)}
        onMouseEnter={dds.junior.openNow}
        onMouseLeave={dds.junior.closeLater}
        linkClassName={DDlinks}
      />

      <MainDropdown
        open={dds.men.open}
        config={menDropdownConfig(currency)}
        onMouseEnter={dds.men.openNow}
        onMouseLeave={dds.men.closeLater}
        linkClassName={DDlinks}
      />

      <MainDropdown
        open={dds.women.open}
        config={womenDropdownConfig(currency)}
        onMouseEnter={dds.women.openNow}
        onMouseLeave={dds.women.closeLater}
        linkClassName={DDlinks}
      />

      {/* Search Dropdown (desktop) */}
      {dds.search.open && (
        <div
          onMouseEnter={dds.search.openNow}
          onMouseLeave={dds.search.closeLater}
          className="hidden md:block border-t border-white/10 px-3 py-4 my-4"
        >
          <div className="max-w-7xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch(query);
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
          {/* Search */}
          <div className="max-w-7xl mx-auto my-4 py-10 flex flex-row gap-5 items-start justify-center text-center font-sans ">
            <div className="flex flex-row gap-8 border-r-2 border-r-white/30 pr-8 h-full">
              <div className="flex flex-col gap-3 text-left">
              <span className="text-sm uppercase tracking-wide text-stone-300">
                Popular Categories
              </span>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer nav-a">Men</li>
                <li className="cursor-pointer nav-a">Women</li>
                <li className="cursor-pointer nav-a">Junior</li>
                <li className="cursor-pointer nav-a">Accessories</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <span className="text-sm uppercase tracking-wide text-stone-300">
                  Trending Searches
                </span>
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer nav-a">Oversized Hoodies</li>
                  <li className="cursor-pointer nav-a">Summer Dresses</li>
                  <li className="cursor-pointer nav-a">Streetwear</li>
                  <li className="cursor-pointer nav-a">Sneakers</li>
                </ul>
              </div>
            </div>
            
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
              <div className=" w-60 h-90 overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-500 relative group">
                <img
                  src="https://down-ph.img.susercontent.com/file/0a36744402860011f0649154dbf73f83"
                  alt="Urban fashion 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 absolute inset-0"
                />
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVucyUyMHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
                  alt="Urban fashion 2"
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="flex items-center justify-center cursor-pointer border-t-2 border-t-black/30">
                <span className="uppercase tracking-[0.35em] font-sans font-semibold ">
                  Shop Street
                </span>
              </div>
            </div>

            {/* right section */}
            <div className="text-stone-400 flex flex-row items-center justify-center px-4 gap-4 hover:text-white transition-colors duration-300">
              <div className="w-50 h-90 overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-500 relative group">
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

      {/* Cart Dropdown */}
      {dds.cart.open && (
        <div
          className="hidden md:block border-t border-white/10 px-3 py-4 my-4 rounded-md z-20"
          onMouseEnter={dds.cart.openNow}
          onMouseLeave={dds.cart.closeLater}
        >
          <div className="p-4 text-white max-w-7xl mx-auto flex gap-10 font-sans">
            <div className="flex items-start justify-start pt-10 shrink-0">
              <span className="[writing-mode:vertical-lr] uppercase cursor-pointer tracking-[0.35em] border-r-2 border-r-black [text-orientation:upright] font-sans font-semibold ">
                Cart
              </span>
            </div>
            <div className="flex-1">
              <p>Your cart is currently empty.</p>
            </div>
          </div>
        </div>
      )}

      {/*  Mobile Menu  */}
      <div className={`${isHamOpen ? "block" : "hidden"} md:hidden mt-3 text-center`}>
        <div className="rounded-2xl bg-black/40 backdrop-blur-md p-4 flex flex-col gap-3 text-stone-300">
          <Link to={getCurrencyPath("/explore")} onClick={() => setIsHamOpen(false)}>
            Explore
          </Link>
          <Link to={getCurrencyPath("/women")} onClick={() => setIsHamOpen(false)}>
            Women
          </Link>
          <Link to={getCurrencyPath("/men")} onClick={() => setIsHamOpen(false)}>
            Men
          </Link>
          <Link to={getCurrencyPath("/junior")} onClick={() => setIsHamOpen(false)}>
            Junior
          </Link>

          <div className="h-px bg-white/30 my-2" />

          <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <span
              onClick={() => setIsMobileCurrencyOpen((v) => !v)}
              className={`${isMobileCurrencyOpen ? "hidden" : "block"} cursor-pointer`}
            >
              {currencyLabel}
            </span>

            <div className={`${isMobileCurrencyOpen ? "flex" : "hidden"} flex-row rounded-sm p-2`}>
              <button
                className="px-4 py-2 text-left hover:bg-white/10 rounded cursor-pointer"
                onClick={() => {
                  localStorage.setItem("currency", "usd");
                  setCurrency("usd");
                }}
              >
                USD $
              </button>
              <button
                className="px-4 py-2 text-left hover:bg-white/10 rounded cursor-pointer"
                onClick={() => {
                  localStorage.setItem("currency", "eur");
                  setCurrency("eur");
                }}
              >
                EUR €
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2">
            <span onClick={() => setIsMobileSearchOpen((v) => !v)}>
              <FontAwesomeIcon icon={faSearch} />
            </span>

            <Link to="/account" className="flex items-center">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/favorites" className="flex items-center">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/cart" className="flex items-center">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Link>
          </div>

          {isMobileSearchOpen && (
            <div className="mt-2">
              <input
                type="text"
                id="mobile-search"
                name="mobile-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitSearch(query);
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
