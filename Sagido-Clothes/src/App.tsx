import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import JuniorPage from "./pages/JuniorPage";
import { ThemeProvider } from "./context/ThemeProvider";
import { NavbarProvider } from "./context/NavbarProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NavbarProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/women" element={<WomenPage />} />
              <Route path="/men" element={<MenPage />} />
              <Route path="/junior" element={<JuniorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NavbarProvider>
    </ThemeProvider>
  );
};

export default App;
