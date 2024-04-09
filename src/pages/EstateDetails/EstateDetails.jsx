import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const EstateDetails = () => {
    const [selectedEstate, setSelectedEstate] = useState({});
    const [estateLoading, setEstateLoading] = useState(true);
    const estates = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        setEstateLoading(true)
        const clickedEstate = estates.find(estate => estate.id === id);
        setSelectedEstate(clickedEstate);
        setEstateLoading(false)
    }, [estates, id])


    if (estateLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-5 h-5 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-red-600"></div>
            </div>
        )
    }
    const { estate_image, estate_title, segment_name, price, status, area, additional_info_1, location } = selectedEstate;
    return (
        <div>
            <img src={estate_image} alt={estate_title} />
        </div>
    );
};

export default EstateDetails;