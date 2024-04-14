import { useEffect, useState } from "react";
// import { EstateContext } from "../../providers/EstateProvider";
import Estate from "../../components/Estate/Estate";
import Slider from "../../components/Slider/Slider";
// import sliderBG from '../../assets/banner.jpeg';

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
            <div className="my-2 md:my-8 flex flex-col lg:flex-row items-center justify-between px-4 py-2 rounded-lg shadow-xl bg-gradient-to-r from-[#ea310c] to-[#09973d] h-full">
                {/* style={{ backgroundImage: `url(${sliderBG})` }} */}
                {/* Banner */}
                <div className="">
                    {/* <img src={sliderBG} alt="" /> */}
                </div>
                {/* Slider */}
                <Slider></Slider>
            </div>
            {/* Estate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </section>
    );
};

export default Home;