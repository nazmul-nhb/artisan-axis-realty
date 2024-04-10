import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Slider = () => {
    const [estates, setEstates] = useState([]);
    const [estateLoading, setEstateLoading] = useState(true);

    const pagination = {
        clickable: true,
    };

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
        <div className="my-2 md:my-8 w-full lg:w-2/3 xl:w-1/2 flex items-center justify-center">
            <Swiper
                style={{
                    '--swiper-navigation-color': 'orange',
                    '--swiper-pagination-color': 'orange',
                }}
                loop={true}
                pagination={pagination}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper shadow-md shadow-[#ea580c] rounded-lg"
            >
                {
                    estates.map(estate =>
                        <SwiperSlide key={estate.id}>
                            <div className="flex relative">
                                <img className="rounded-lg" src={estate.estate_image} alt={estate.estate_title} />
                                <div className="bg-[#ffffff90] absolute top-0 flex flex-col md:flex-row justify-between md:items-center md:gap-0 gap-1 w-full py-1 px-2">
                                    <div className="flex flex-col items-start">
                                        <div className={`flex gap-2 text-xs md:text-sm lg:text-base ${estate.status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                                            <h4 className="font-semibold">{estate.additional_info_1.split(': ')[0]}:</h4>
                                            <h4 className="">{estate.additional_info_1.split(': ')[1]}</h4>
                                        </div>
                                        <div className={`flex gap-2 text-xs md:text-sm lg:text-base ${estate.status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                                            <h4 className="font-semibold">{estate.additional_info_2.split(': ')[0]}:</h4>
                                            <h4 className="">{estate.additional_info_2.split(': ')[1]}</h4>
                                        </div>
                                    </div>
                                    <Link to={`/${estate.id}`}><Button className={'font-bold border-2 text-xs xl:text-sm'} buttonText={`${estate.status === 'sale' ? 'Buy Now' : 'Rent Now'}`} color={`${estate.status === 'sale' ? '#16a34a' : '#ea580c'}`} hoverColor={'white'} hoverBgColor={'transparent'}></Button></Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
            <div className="">

            </div>
        </div>
    );
};

export default Slider;