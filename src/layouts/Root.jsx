import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;