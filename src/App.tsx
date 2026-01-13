import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import JuniorPage from "./pages/JuniorPage";
import AboutUsPage from "./pages/AboutUsPage";
import { NavbarProvider } from "./context/NavbarProvider";
import { ToastProvider } from "./context/ToastProvider";
import { ToastNotifications } from "./components/ToastNotifications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

import Faq from "./pages/FAQsPage";

const CurrencyGate = () => {
  const saved = localStorage.getItem("currency"); 
  const currency = saved === "usd" ? "usd" : "eur";
  return <Navigate to={`/${currency}`} replace />;
};

const CurrencyFallback = () => {
  const saved = localStorage.getItem("currency");
  const currency = saved === "usd" ? "usd" : "eur";
  const path = window.location.pathname;
  return <Navigate to={`/${currency}${path}`} replace />;
};

const App = () => {
  return (
    <NavbarProvider>
      <ToastProvider>
          <BrowserRouter>
            <ToastNotifications />
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

                <Route path="*" element={<Navigate to="." replace />} />
              </Route>

            <Route path="*" element={<CurrencyFallback />} />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </NavbarProvider>
  );
};

export default App;
