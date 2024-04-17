import { Helmet } from "react-helmet-async";
import ArtisanAxis from '../../assets/aa-logo.png'
import siteBG from '../../assets/banner.jpeg'

const About = () => {
    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4 flex flex-col items-center gap-6 bg-cover" style={{ backgroundImage: `url${siteBG}` }}>
            <Helmet>
                <title>About - ArtisanAxis</title>
            </Helmet>
            <div className="w-full p-4 md:py-9 rounded-2xl flex justify-center items-center mb-6">
                <h3 id="about-header" className="text-2xl md:text-4xl font-bold">About ArtisanAxis Realty</h3>
            </div>
            <div
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex flex-col md:flex-row justify-between items-center w-full md:w-3/5 gap-8 bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] p-6 md:px-10 md:py-6 rounded-lg shadow-lg shadow-[#142227]">
                <div className="md:w-1/3"><img className="rounded-lg hover:scale-105 transition duration-700" src={ArtisanAxis} alt="Book Review" /></div>
                <p className="indent-6 md:w-2/3 text-base md:text-lg text-justify text-[#415860]">
                    Welcome to ArtisanAxis Realty, where we specialize in offering unique and exceptional properties tailored to various segments including hospitals, schools, religious facilities, transportation terminals, convention centers, and art galleries.
                </p>
            </div>

            <fieldset
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                id="about-1" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] shadow-lg shadow-[#142227]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-2">Diverse Portfolio</a></legend>
                <p className="text-base md:text-xl">
                    Our portfolio showcases a diverse range of properties, from modern hospital complexes equipped with state-of-the-art medical facilities to elite school campuses providing nurturing environments for academic excellence.
                </p>
            </fieldset>

            <fieldset
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                id="about-2" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] shadow-lg shadow-[#142227]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-3">Timeless Elegance</a></legend>
                <p className="text-base md:text-xl space-y-3">
                    Discover historic church buildings exuding timeless elegance, bustling transportation hubs seamlessly connecting commuters, expansive convention centers ideal for hosting large-scale events, and vibrant art galleries fostering creativity and community engagement.
                </p>
            </fieldset>

            <fieldset
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                id="about-3" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] shadow-lg shadow-[#142227]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#0b1d1157] to-[#6340b4a3] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-4">Seamless Connectivity</a></legend>
                <p className="text-base md:text-xl">
                    At ArtisanAxis Realty, we&rsquo;re dedicated to helping you find the perfect space that aligns with your unique needs and aspirations, whether it&rsquo;s for investment, business, or personal endeavors. Explore our curated selection of properties and embark on your real estate journey with us today.
                </p>
            </fieldset>

            <p
                data-aos="zoom-out-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="md:w-2/3 text-base md:text-xl mt-8 md:mt-16 text-center text-gray-500">
                Embark with us on a journey of discovery.
                <br />
                Together, let&rsquo;s explore the endless possibilities of real estate and celebrate the magic of finding your perfect space!
            </p>
        </section>
    );
};

export default About;