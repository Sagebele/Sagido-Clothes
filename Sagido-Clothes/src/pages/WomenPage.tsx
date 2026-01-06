import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";

const WomenPage = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid", tone: "dark" });
    }, [setNavbar]);

    return (
        <div className="pt-28 px-6">
            <h1 className="text-3xl font-bold">Women</h1>
        </div>
    );
};

export default WomenPage;
