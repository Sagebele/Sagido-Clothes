import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import JuniorPage from "./pages/JuniorPage";
import AboutUsPage from "./pages/AboutUsPage";
import { NavbarProvider } from "./context/NavbarProvider";
import { CartProvider } from "./context/CartProvider";
import { CartIconProvider } from "./context/CartIconContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

import Faq from "./pages/FAQsPage";
import Shipping from "./pages/Shipping";
import ReturnsPage from "./pages/ReturnsPage";
import PageNotFound from "./pages/PageNotFound";

const CurrencyGate = () => {
  const saved = localStorage.getItem("currency"); 
  const currency = saved === "usd" ? "usd" : "eur";
  return <Navigate to={`/${currency}`} replace />;
};

const RootFallback = () => {
  const saved = localStorage.getItem("currency");
  const currency = saved === "usd" ? "usd" : "eur";
  return <Navigate to={`/${currency}/notfound`} replace />;
};

const App = () => {
  return (
    <NavbarProvider>
      <CartProvider>
        <CartIconProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CurrencyGate />} />

              <Route path="/:currency" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="women" element={<WomenPage />} />
                <Route path="men" element={<MenPage />} />
                <Route path="junior" element={<JuniorPage />} />
                <Route path="aboutus" element={<AboutUsPage />} />
                <Route path="privacypolicy" element={<PrivacyPolicy />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="faqs" element={<Faq />} />
                <Route path="shipping" element={<Shipping />} />
                <Route path="returns" element={<ReturnsPage />} />
                <Route path="notfound" element={<PageNotFound />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>

              <Route path="*" element={<RootFallback />} />
            </Routes>
          </BrowserRouter>
        </CartIconProvider>
      </CartProvider>
    </NavbarProvider>
  );
};

export default App;
