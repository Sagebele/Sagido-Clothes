import { useMemo, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export type Currency = "eur" | "usd";

const CURRENCY_LABEL: Record<Currency, string> = {
    eur: "EUR €",
    usd: "USD $",
};

export function useCurrencyRouting() {
    const navigate = useNavigate();
    const location = useLocation();
    const { currency: currencyParam } = useParams<{ currency?: string }>();

    const [isMobileCurrencyOpen, setIsMobileCurrencyOpen] = useState(false);

    const currency: Currency = currencyParam === "usd" ? "usd" : "eur";
    const currencyLabel = useMemo(() => CURRENCY_LABEL[currency], [currency]);

    const setCurrency = useCallback(
        (to: Currency) => {
        setIsMobileCurrencyOpen(false);

        const segments = location.pathname.split("/").filter(Boolean);
        if (segments[0] === "eur" || segments[0] === "usd") segments[0] = to;
        else segments.unshift(to);

        navigate("/" + segments.join("/") + location.search, { replace: true });
        },
        [location.pathname, location.search, navigate]
    );

    return {
        currency,
        currencyLabel,
        isMobileCurrencyOpen,
        setIsMobileCurrencyOpen,
        setCurrency,
    };
}
