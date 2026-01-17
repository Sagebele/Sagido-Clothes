import { useEffect } from "react";
import { Outlet, useLocation, useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import type { Currency } from "../types/product";

const VALID_CURRENCIES = ["eur", "usd"] as const;

const RootLayout = () => {
    const { pathname } = useLocation();
    const { currency: currencyParam } = useParams<{ currency: string }>();
    
    const isValidCurrency = VALID_CURRENCIES.includes(currencyParam as Currency);
    const currency: Currency = isValidCurrency ? (currencyParam as Currency) : "eur";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        localStorage.setItem("currency", currency);
    }, [currency]);

    if (!isValidCurrency) {
        return <Navigate to="/eur/notfound" replace />;
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;
