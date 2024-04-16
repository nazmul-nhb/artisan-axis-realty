import { useEffect, useState } from "react";
// import { EstateContext } from "../../providers/EstateProvider";
import Estate from "../../components/Estate/Estate";
import Slider from "../../components/Slider/Slider";
import { Helmet } from 'react-helmet-async';
import safety from '../../assets/safety.png';
import money from '../../assets/money.png';
import commission from '../../assets/commision.png';

const Home = () => {
    // const { estates, estateLoading } = useContext(EstateContext);
    const [estates, setEstates] = useState([]);
    const [estateLoading, setEstateLoading] = useState(true);

    useEffect(() => {
        setEstateLoading(true);
        fetch('./estate-data.json')
            .then(respond => respond.json())
            .then(data => setEstates(data))
        setEstateLoading(false);
    }, [])

    if (estateLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-5 h-5 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-red-600"></div>
            </div>
        )
    }

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Helmet>
                <title>ArtisanAxis Realty</title>
            </Helmet>
            <div className="my-2 md:my-4 flex flex-col-reverse xl:flex-row items-center justify-between px-2 md:px-8 py-2 rounded-lg shadow-xl bg-gradient-to-r from-[#0b1d1157] to-[#4c00ffa3]">

                {/* Banner */}
                <div className="flex flex-col gap-6 justify-center items-center pr-4 text-center xl:text-left">
                    <h3 className="text-2xl md:text-5xl font-bold text-white md:leading-snug">Discover the Art of Specialty Real Estate with ArtisanAxis</h3>
                    <p className="text-white text-base md:text-lg">Step into a world where innovation meets elegance, where ArtisanAxis Realty&rsquo;s dedication to detail transforms spaces into havens of inspiration, tailored to reflect your unique style and aspirations.</p>
                </div>

                {/* Slider */}
                <Slider></Slider>
            </div>

            {/* Find Property */}
            <div className="my-8 md:my-16 flex flex-col gap-3 md:gap-6 justify-center items-center pr-4 text-center mx-auto">
                <h3 className="text-xl md:text-5xl font-bold md:leading-snug"><span className="text-[#16a34a]"><span>&#9074;</span>rtisan</span><span className="text-[#ea580c]"><span>&#9074;</span>xis</span> Realty
                    <br />
                    Find Property for Yor Community</h3>
                <p className="w-[88%] md:w-3/5 text-[#898585] text-base md:text-xl">Every property is a masterpiece, meticulously crafted to blend artistry with architectural brilliance.
                    <br />
                    Select a property from the list below for your community.</p>
            </div>

            {/* Estate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    estates?.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>

            {/* Services & Benefits*/}
            <div className="my-8 md:my-16 flex flex-col gap-3 md:gap-6 justify-center items-center pr-4 text-center mx-auto">
                <h3 className="mt-8 md:mt-16 text-xl md:text-5xl font-bold md:leading-snug">Our Services & Benefits</h3>
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div data-aos="flip-left" data-aos-duration="1000" className="text-center flex flex-col justify-start gap-4 items-center border rounded-lg border-gray-600 px-4 py-3 bg-gray-100">
                        <img src={safety} alt="Insurance" className="w-24" />
                        <h3 className="text-lg font-semibold">Property Insurance</h3>
                        <p className="ext-base">
                            Safeguard your investment with our comprehensive property insurance services, providing peace of mind against unforeseen damages or liabilities, ensuring your property remains protected.
                        </p>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1000" className="text-center flex flex-col justify-start gap-4 items-center border rounded-lg border-gray-600 px-4 py-3 bg-gray-100">
                        <img src={money} alt="Benefits" className="w-20" />
                        <h3 className="text-lg font-semibold">Benefits</h3>
                        <p className="text-base">
                            Whether you&rsquo;re a first-time buyer, seasoned investor, or property owner, discover the myriad benefits of working with a trusted real estate partner dedicated to your success, from maximizing property value to achieving your long-term financial goals.
                        </p>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="2000" data-aos-duration="1000" className="text-center flex flex-col justify-start gap-4 items-center border rounded-lg border-gray-600 px-4 py-3 bg-gray-100">
                        <img src={commission} alt="Tax" className="w-20" />
                        <h3 className="text-lg font-semibold">Less Tax & Commission</h3>
                        <p className="ext-base">
                            Whether buying, selling, or investing, trust in our knowledgeable professionals to guide you through the process, providing strategic advice and expert negotiation skills to minimize costs and maximize returns on every transaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;