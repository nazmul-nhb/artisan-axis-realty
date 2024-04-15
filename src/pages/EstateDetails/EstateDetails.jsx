import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropertyLocation from "../../components/PropertyLocation/PropertyLocation";

const EstateDetails = () => {
    const [selectedEstate, setSelectedEstate] = useState({});
    const [estateLoading, setEstateLoading] = useState(true);
    const estates = useLoaderData();
    const { id } = useParams();
    const [tabIndex, setTabIndex] = useState(0);


    useEffect(() => {
        setEstateLoading(true);
        const clickedEstate = estates.find(estate => estate.id === id);
        setSelectedEstate(clickedEstate);
        setEstateLoading(false);
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
    const { estate_image, estate_title, segment_name, price, status, area, additional_info_1, additional_info_2,  location } = selectedEstate;
    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Property Details</Tab>
                    <Tab>Find Property on Map</Tab>
                </TabList>
                <TabPanel>
                    <img src={estate_image} alt={estate_title} />

                </TabPanel>
                <TabPanel>
                    <PropertyLocation selectedEstate={selectedEstate}></PropertyLocation>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default EstateDetails;