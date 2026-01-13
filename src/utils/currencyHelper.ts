import { useParams } from "react-router-dom";

export const useGetCurrencyPath = () => {
    const { currency = "eur" } = useParams<{ currency?: string }>();
    
    return (path: string): string => {
        if (path.startsWith("/eur") || path.startsWith("/usd")) {
            return path;
        }
        const cleanPath = path.startsWith("/") ? path : `/${path}`;
        return `/${currency}${cleanPath}`;
    };
};

const getCurrencyFromStorage = (): string => {
    const saved = localStorage.getItem("currency");
    return saved === "usd" ? "usd" : "eur";
};

export const getCurrencyPath = (path: string): string => {
    const currency = getCurrencyFromStorage();
    if (path.startsWith("/eur") || path.startsWith("/usd")) {
        return path;
    }
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${currency}${cleanPath}`;
};

