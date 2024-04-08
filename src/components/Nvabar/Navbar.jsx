import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            !user && <>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li></>
        }
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
            {
                user
                    ? <div className="flex items-center gap-4">
                        <h3 className="text-xl font-semibold text-"><Link to={'/profile'}>{user?.displayName || user?.email}</Link></h3>
                        <div onClick={logOut}>
                            <Button className="text-2xl font-bold" buttonText={"Logout"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button>
                        </div>
                    </div>
                    : <Link to={'/login'}><Button className="text-2xl font-bold" buttonText={"Login"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></Link>
            }


        </nav>
    );
};

export default Navbar;