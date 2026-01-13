export const getCurrencyPrefix = (): string => {
    const saved = localStorage.getItem("currency");
    return saved === "usd" ? "usd" : "eur";
};

export const getCurrencyPath = (path: string): string => {
    const currency = getCurrencyPrefix();
    if (path.startsWith("/eur") || path.startsWith("/usd")) {
        return path;
    }
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${currency}${cleanPath}`;
};
