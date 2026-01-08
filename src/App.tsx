import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import JuniorPage from "./pages/JuniorPage";
import { ThemeProvider } from "./context/ThemeProvider";
import { NavbarProvider } from "./context/NavbarProvider";

const CurrencyGate = () => {
  const saved = localStorage.getItem("currency"); 
  const currency = saved === "usd" ? "usd" : "eur";
  return <Navigate to={`/${currency}`} replace />;
};

const App = () => {
  return (
    <ThemeProvider>
      <NavbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CurrencyGate />} />

            <Route path="/:currency" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="women" element={<WomenPage />} />
              <Route path="men" element={<MenPage />} />
              <Route path="junior" element={<JuniorPage />} />

              <Route path="*" element={<Navigate to="." replace />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </NavbarProvider>
    </ThemeProvider>
  );
};

export default App;
