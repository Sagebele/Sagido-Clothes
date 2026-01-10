import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;
