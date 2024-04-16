import { useEffect, useState } from "react";
// import { EstateContext } from "../../providers/EstateProvider";
import Estate from "../../components/Estate/Estate";
import Slider from "../../components/Slider/Slider";
// import sliderBG from '../../assets/banner.jpeg';
import { Helmet } from 'react-helmet-async';

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
                {/* style={{ backgroundImage: `url(${sliderBG})` }} */}
                {/* Banner */}
                <div className="flex flex-col gap-6 justify-center items-center pr-4 text-center xl:text-left">
                    <h3 className="text-2xl md:text-5xl font-bold text-white md:leading-snug">Discover the Art of Specialty Real Estate with ArtisanAxis</h3>
                    <p className="text-white text-base md:text-lg">Step into a world where innovation meets elegance, where ArtisanAxis Realty&rsquo;s dedication to detail transforms spaces into havens of inspiration, tailored to reflect your unique style and aspirations.</p>
                </div>
                {/* Slider */}
                <Slider></Slider>
            </div>
            {/* Estate Cards */}
            <div className="my-8 md:my-16 flex flex-col gap-3 md:gap-6 justify-center items-center pr-4 text-center mx-auto">
                <h3 className="text-xl md:text-5xl font-bold md:leading-snug"><span className="text-[#16a34a]"><span>&#9074;</span>rtisan</span><span className="text-[#ea580c]"><span>&#9074;</span>xis</span> Realty
                <br /> 
                Find Property for Yor Community</h3>
                <p className="w-[88%] md:w-3/5 text-base md:text-lg">Every property is a masterpiece, meticulously crafted to blend artistry with architectural brilliance, offering you a canvas for your dreams to flourish.
                <br />
                Select a property from the list below for your community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    estates?.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </section>
    );
};

export default Home;