import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="font-workSans w-full mx-auto flex flex-col gap-6 p-8 lg:p-24 bg-[#12132d0d] lg:mt-24 mt-8">
            <div className="text-center flex flex-col items-center gap-6 mb-4">
                <h3 className="text-[#12132D] font-extrabold text-[28px] hover:text-[#59C6D2] lg:text-4xl transition duration-500"><Link to={'/about'}>ArtisanAxis Realty</Link></h3>
                <p className="w-full lg:w-2/5 mx-auto text-[#12132DB3]">Where Artistry Meets Architecture.
                <br />
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