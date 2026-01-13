import { useEffect } from "react";
import { useNavbar } from "../context/useNavbar";

const JuniorPage = () => {
    const { setNavbar } = useNavbar();

    useEffect(() => {
        setNavbar({ variant: "solid", tone: "dark" });
        window.scrollTo(0, 0);
    }, [setNavbar]);

    return (
        <div className="pt-28 px-6">
            <h1 className="text-3xl font-bold">Junior</h1>
        </div>
    );
};

export default JuniorPage;
