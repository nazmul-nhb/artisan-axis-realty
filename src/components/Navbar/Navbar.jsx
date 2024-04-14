import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultPP from '../../assets/user.png';
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import logo from '../../assets/aa-logo-home.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user
                ? <><li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
                    <li><NavLink to={'/profile'}>My Profile</NavLink></li></>
                : <>
                    {/* <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/register'}>Register</NavLink></li> */}
                </>
        }
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                alert(error);
            })
    }

    return (
        <nav className="flex items-center gap-2 md:gap-4 mx-0 shadow-md px-4 py-3 md:px-[5.4%] sticky top-0 bg-white z-20">
            <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
                {
                    open
                        ? <MdOutlineClose></MdOutlineClose>
                        : <MdMenuOpen></MdMenuOpen>
                }
            </div>
            <div className="flex justify-between items-center w-full">
                <Link to='/'>
                    <div className="flex items-center gap-1" title="ArtisanAxis Realty"><img src={logo} alt="Logo" className="w-11 md:w-16 h-9 md:h-14" />
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-2xl font-semibold"><span className="text-[#16a34a]"><span className="text-xl md:text-4xl">&#9074;</span>rtisan</span><span className="text-[#ea580c]"><span className="text-xl md:text-4xl">&#9074;</span>xis</span> Realty</h3>
                            <h6 className="text-[9px] md:text-sm text-[#ea0c0c]">Where Artistry Meets Architecture</h6>
                        </div>
                    </div>
                </Link>
                <div className="text-sm md:text-base">
                    <ul className={`w-1/2 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-4 font-medium duration-500 absolute lg:static shadow-xl lg:shadow-none h-screen lg:h-auto p-4 lg:p-0 ${open ? 'left-0 top-12 bg-white flex z-10' : '-left-60 top-12'}`}>
                        {navLinks}
                    </ul>
                </div>
                {
                    user
                        ? <div className="flex items-center gap-1 md:gap-4">
                            <Link to={'/profile'}><img className="w-9 md:w-14 h-9 md:h-14 rounded-full" src={user?.photoURL ? user?.photoURL : defaultPP} alt={user?.displayName} title={user?.displayName} /></Link>

                            <div onClick={handleLogout}>
                                <Button className="border text-base md:text-xl xl:text-2xl font-bold" buttonText={"Logout"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button>
                            </div>
                        </div>
                        : <Link to={'/login'}><Button className="border text-base md:text-xl xl:text-2xl font-bold" buttonText={"Login"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;