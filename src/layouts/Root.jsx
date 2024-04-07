import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nvabar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <main>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;