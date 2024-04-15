import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropertyLocation from "../../components/PropertyLocation/PropertyLocation";
import { Helmet } from 'react-helmet-async';
import Button from "../../components/Button/Button";

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

    const { estate_image, estate_title, segment_name, description, price, status, area, facilities, additional_info_1, additional_info_2, location } = selectedEstate;

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
                <title>Details of {estate_title} - ArtisanAxis</title>
            </Helmet>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
                    <Tab><h4 className="font-medium">Property Details</h4></Tab>
                    <Tab><h4 className="font-medium">Find on Map</h4></Tab>
                </TabList>

                <TabPanel>
                    <div className="">
                        <div className="">
                            <div className="">
                                <img src={estate_image} alt={estate_title} />
                                <h5 className="">{status === 'sale' ? 'Sale' : 'Rent'}</h5>
                                <h3 className="">{price}</h3>
                            </div>
                            <div className="">
                                <h3 className="">{estate_title}</h3>
                                <h4 className="">{segment_name}</h4>
                                <div className="">
                                    <h4 className="">{area}</h4>
                                    <h4 className="">{location.street}, {location.city}, {location.state}-{location.zip_code}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <div className="">
                                    <h3 className="">Facilities:</h3>
                                    {
                                        facilities?.map((facility, idx) => <li key={idx} className="pl-4">{facility}</li>)
                                    }
                                </div>
                                <div className="">
                                    <h3 className="">Special Features:</h3>
                                    <div className={`flex-grow flex gap-2 text-sm lg:text-base ${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                                        <h4 className="font-semibold">{additional_info_1.split(': ')[0]}:</h4>
                                        <h4 className="">{additional_info_1.split(': ')[1]}</h4>
                                    </div>
                                    <div className={`flex-grow flex gap-2 text-sm lg:text-base ${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                                        <h4 className="font-semibold">{additional_info_2.split(': ')[0]}:</h4>
                                        <h4 className="">{additional_info_2.split(': ')[1]}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p className="">{description}</p>
                            </div>
                        </div>
                        
                        <div className="flex justify-between">
                            <Button onClick={() => console.log('clicked')} className={'border'} buttonText={'Add to Favorites'} color={'red'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                            
                            <Button onClick={() => console.log('clicked')} className={'border'} buttonText={'Buy Now'} color={'red'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <PropertyLocation selectedEstate={selectedEstate}></PropertyLocation>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default EstateDetails;