import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultPP from '../../assets/user.png';
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import logo from '../../assets/aa-logo-home.png';
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import { getStoredItems } from "../../utilities/local-storage";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [favCount, setFavCount] = useState(0);
    // const [countLoading, setCountLoading] = useState(true);
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        // setCountLoading(true);
        const favItems = getStoredItems('estates');
        setFavCount(favItems.length);
        // setCountLoading(false);
    }, [favCount])

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user
                ? <><li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
                    <li><NavLink to={'/favorites'}>Favorites <sup>{favCount === 0 ? "" : favCount}</sup></NavLink></li>
                </>
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
                toast.error(error.message.split(': ')[1]);
            })
    }

    return (
        <nav className="flex items-center gap-0 md:gap-4 mx-0 shadow-md px-4 py-3 md:px-[5.4%] sticky top-0 bg-white bg-opacity-95 z-20">
            <div className="lg:hidden text-4xl md:text-5xl cursor-pointer" onClick={() => setOpen(!open)}>
                {
                    open
                        ? <MdOutlineClose className="text-[#e85800] hover:text-[#236d3e]"></MdOutlineClose>
                        : <MdMenuOpen className="text-[#236d3e] hover:text-[#e85800]"></MdMenuOpen>
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
                <div className="text-sm xl:text-base">
                    <ul className={`w-1/2 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-4 font-medium duration-500 absolute lg:static shadow-md shadow-slate-700 lg:shadow-none h-screen lg:h-auto p-4 lg:p-0 ${open ? 'left-0 top-16 md:top-20 bg-white bg-opacity-90 flex z-10' : '-left-96 top-16 md:top-20'}`}>
                        {navLinks}
                    </ul>
                </div>
                {
                    user
                        ? <div className="flex items-center gap-1 md:gap-2">
                            <Link to={'/profile'}><img className="w-9 md:w-14 h-9 md:h-14 rounded-full border-2 p-[2px] border-green-900" src={user?.photoURL ? user?.photoURL : defaultPP} alt={user?.displayName} title={user?.displayName} /></Link>

                            <div className="cursor-pointer text-3xl md:text-5xl text-[#e85800] hover:text-[#236d3e]" title="Logout" onClick={handleLogout}>
                                <FiLogOut />
                                {/* <Button className="border text-sm md:text-xl xl:text-2xl font-bold" buttonText={"Logout"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button> */}
                            </div>
                        </div>
                        : <Link to={'/login'}><Button className="border text-sm md:text-xl xl:text-2xl font-bold" buttonText={"Login"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button></Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;