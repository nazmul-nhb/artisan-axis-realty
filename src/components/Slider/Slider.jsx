import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

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
        <div className="my-2 md:my-8 w-full md:w-1/2 flex items-center justify-center">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                pagination={pagination}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    estates.map(estate => <SwiperSlide key={estate.id} estate={estate}>
                        <img src={estate.estate_image} alt={estate.estate_title} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;