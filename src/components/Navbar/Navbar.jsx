import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultPP from "../../assets/user.png";
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import logo from "../../assets/aa-logo-home.png";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
// import { getStoredItems } from "../../utilities/local-storage";
import { useSelector } from "react-redux";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [favCount, setFavCount] = useState(0);
	const { user, logOut } = useContext(AuthContext);
	const [userName, setUserName] = useState("");
	const [profilePicture, setProfilePicture] = useState("");

	const localEstates = useSelector((state) => state.favorites.favorites); // Accessing Redux state

	useEffect(() => {
		// const favItems = getStoredItems('estates');
		setFavCount(localEstates.length);
	}, [localEstates]);

	useEffect(() => {
		// Update user profile information when user context changes
		// Unfortunately It does not change userName and profilePicture automatically when user info updates
		// It needs a reload
		if (user) {
			setUserName(user.displayName || "Human");
			setProfilePicture(user.photoURL || defaultPP);
		} else {
			setUserName("Human");
			setProfilePicture(defaultPP);
		}
	}, [user]);

	const navLinks = (
		<>
			<NavLink to={"/"}>Home</NavLink>
			{user ? (
				<>
					<NavLink to={"/update-profile"}>Update Profile</NavLink>
					<NavLink to={"/favorites"}>
						Favorites <sup>{favCount === 0 ? "" : favCount}</sup>
					</NavLink>
				</>
			) : (
				<>
					{/* <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Register</NavLink> */}
				</>
			)}
			<NavLink to={"/contact"}>Contact</NavLink>
			<NavLink to={"/about"}>About</NavLink>
		</>
	);

	const handleLogout = () => {
		logOut()
			.then(() => {
				toast.success("Logged out Successfully!");
			})
			.catch((error) => {
				toast.error(error.message.split(": ")[1]);
			});
	};

	return (
		<nav className="flex items-center gap-0 md:gap-4 mx-0 shadow-md px-4 py-3 md:px-[5.4%] sticky top-0 bg-white bg-opacity-95 z-20">
			<div
				className="lg:hidden text-4xl md:text-5xl cursor-pointer"
				onClick={() => setOpen(!open)}
			>
				{open ? (
					<MdOutlineClose className="text-[#e85800] hover:text-[#236d3e] transform transition-all duration-1000"></MdOutlineClose>
				) : (
					<MdMenuOpen className="text-[#236d3e] hover:text-[#e85800] transform transition-all duration-1000"></MdMenuOpen>
				)}
			</div>
			<div className="flex justify-between items-center w-full">
				<Link to="/">
					<div
						className="flex items-center gap-1"
						title="ArtisanAxis Realty"
					>
						<img
							src={logo}
							alt="Logo"
							className="w-10 md:w-16 h-9 md:h-14"
						/>
						<div className="flex flex-col">
							<h3 className="text-base md:text-2xl font-semibold">
								<span className="text-[#16a34a]">
									<span className="text-xl md:text-4xl">
										&#9074;
									</span>
									rtisan
								</span>
								<span className="text-[#ea580c]">
									<span className="text-xl md:text-4xl">
										&#9074;
									</span>
									xis
								</span>{" "}
								Realty
							</h3>
							<h6 className="text-[9px] md:text-sm text-[#ea0c0c]">
								Where Artistry Meets Architecture
							</h6>
						</div>
					</div>
				</Link>
				<div className="text-sm xl:text-base">
					<ul
						className={`w-1/2 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-2 font-medium duration-500 absolute lg:static shadow-md shadow-slate-700 lg:shadow-none h-screen lg:h-auto p-4 lg:p-0 ${
							open
								? "left-0 top-16 md:top-20 bg-white bg-opacity-95 flex z-10"
								: "-left-full top-16 md:top-20"
						}`}
					>
						{navLinks}
					</ul>
				</div>
				{user ? (
					<div className="flex items-center gap-2 md:gap-3">
						<Link to={"/profile"}>
							<img
								className="w-9 md:w-14 h-9 md:h-14 rounded-full border-2 p-[2px] border-green-900 hover:opacity-75 transform transition-all duration-1000"
								src={profilePicture}
								alt={userName}
								title={userName}
							/>
						</Link>

						<div
							className="cursor-pointer text-3xl md:text-5xl text-[#e85800] hover:text-[#236d3e] transform transition-all duration-1000"
							title="Logout"
							onClick={handleLogout}
						>
							<FiLogOut />
							{/* <Button className="border text-sm md:text-xl xl:text-2xl font-bold" buttonText={"Logout"} color={"teal"} hoverColor={"white"} hoverBgColor={"transparent"}></Button> */}
						</div>
					</div>
				) : (
					<Link to={"/login"}>
						<Button
							className="border text-sm md:text-xl xl:text-2xl font-bold"
							buttonText={"Login"}
							color={"teal"}
							hoverColor={"white"}
							hoverBgColor={"transparent"}
						></Button>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
