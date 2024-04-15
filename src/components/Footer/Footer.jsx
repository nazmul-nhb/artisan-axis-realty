import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/aa-logo.png';

const Footer = () => {
    return (
        <footer className="w-full mx-auto flex flex-col gap-6 p-8 md:px-24 md:py-16 bg-gradient-to-r to-[#16a34a57] from-[#4c00ffa3] lg:mt-24 mt-8">
            <div className="text-center flex flex-col items-center gap-4 mb-4">
                <img src={logo} alt="ArtisanAxis Logo" className="w-1/3 md:w-1/5" />
                <h3 className="text-lg md:text-2xl font-bold transition duration-500 hover:text-[#16a34a]"><Link to={'/about'}><span className="text-[#236d3e] hover:text-[#ea580c]"><span className="text-2xl md:text-4xl">&#9074;</span>rtisan</span><span className="text-[#ea580c] hover:text-[#16a34a]"><span className="text-2xl md:text-4xl">&#9074;</span>xis</span> Realty</Link></h3>
                <p className="w-full lg:w-2/5 mx-auto text-[#12132DB3]">
                Creating Destinations, Cultivating Community!</p>
            </div>
            {/* Social Media */}
            <div className="flex flex-row gap-8 justify-center text-2xl">
                <a href="https://x.com/nhb42" target="_blank" className="hover:text-[#59C6D2]">
                    <FaXTwitter></FaXTwitter></a>
                <a href="https://fb.com/nazmul.batchu" target="_blank" className="hover:text-[#59C6D2]">
                    <FaFacebookF></FaFacebookF></a>
                <a href="https://www.instagram.com/nazmulbatchu" target="_blank" className="hover:text-[#59C6D2]">
                    <FaInstagram></FaInstagram></a>
                <a href="https://github.com/nazmul-nhb/" target="_blank" className="hover:text-[#59C6D2]">
                    <FaGithub></FaGithub></a>
            </div>
            <hr className="border border-dashed border-[#12132D40]" />
            <p className="text-center">
                <span className="font-semibold">ArtisanAxis Realty</span>
                <br />
                <span className="text-[#12132D80]">2024 &copy; All Rights Reserved.</span>
            </p>
        </footer>
    );
};

export default Footer;