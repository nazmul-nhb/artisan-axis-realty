import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
    </>

    return (
        <nav className="flex justify-between items-center my-8">
            <div><h3 className="text-2xl font-semibold">ArtisanAxis Realty</h3></div>
            <div>
                <ul className="flex justify-center gap-6 font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-"><Link to={'/profile'}>My Profile</Link></h3>
                <Button className="text-2xl font-bold" buttonText={"Login"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button>
            </div>
        </nav>
    );
};

export default Navbar;