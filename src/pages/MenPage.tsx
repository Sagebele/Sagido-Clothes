import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";

const MenPage = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid" });
        window.scrollTo(0, 0);
    }, [setNavbar]);

    return (
        <div className="pt-28 px-6">
            <h1 className="text-3xl font-bold">Men</h1>
        </div>
    );
};

export default MenPage;
