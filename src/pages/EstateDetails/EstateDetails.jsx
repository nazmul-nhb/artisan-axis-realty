import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropertyLocation from "../../components/PropertyLocation/PropertyLocation";
import { Helmet } from 'react-helmet-async';
import Button from "../../components/Button/Button";
import { GrLocation } from "react-icons/gr";
import success from '../../assets/success.png';
import { removeFromLocal, saveToLocal } from "../../utilities/local-storage";

const EstateDetails = () => {
    const [selectedEstate, setSelectedEstate] = useState({});
    const [estateLoading, setEstateLoading] = useState(true);
    const estates = useLoaderData();
    const { id } = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setEstateLoading(true);
        const clickedEstate = estates.find(estate => estate.id === id);
        setSelectedEstate(clickedEstate);
        setEstateLoading(false);
    }, [estates, id])

    const { estate_image, estate_title, segment_name, description, price, status, area, facilities, additional_info_1, additional_info_2, location } = selectedEstate;

    const closeModal = () => {
        setShowModal(false);
    };

    const addToFavorites = () => {
        saveToLocal(selectedEstate.id, 'estates');
    }

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
                    <div className="space-y-8">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="w-full lg:w-3/5 relative">
                                <img className="rounded-lg" src={estate_image} alt={estate_title} />
                                <h5 className="absolute top-2 right-2">{status === 'sale' ? 'Sale' : 'Rent'}</h5>
                                <h3 className="absolute bottom-2 right-2">{price}</h3>
                            </div>
                            <div className="w-full lg:w-2/5 flex flex-col gap-2">
                                <h3 className="text-3xl font-bold">{estate_title}</h3>
                                <div className="flex flex-row justify-between">
                                    <h4 className="border rounded-lg px-4 py-2">{segment_name}</h4>
                                    <h4 className="border rounded-lg px-4 py-2">Area: {area}</h4>
                                </div>
                                <h4 className="border rounded-lg px-4 py-2 flex gap-2 items-center"><GrLocation />{location.street}, {location.city}, {location.state}-{location.zip_code}</h4>
                                <div className="flex-grow mt-4">
                                    <h3 className="text-xl font-medium">Facilities:</h3>
                                    {
                                        facilities?.map((facility, idx) => <li key={idx} className="pl-4">{facility}</li>)
                                    }
                                </div>
                                <div className="border px-4 py-2">
                                    <h3 className="text-xl font-medium">Special Features:</h3>
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
                        </div>
                        <div className="flex justify-between gap-6">
                            <p className="w-full lg:w-3/5"><span className="font-semibold">Description:</span> {description}</p>
                            <div className="w-full lg:w-2/5 flex justify-between items-center">
                                <div>
                                    <Button onClick={addToFavorites} className={'border'} buttonText={'Add to Favorites'} color={'red'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                                </div>
                                <div>
                                    <Button onClick={() => {setShowModal(true); removeFromLocal(selectedEstate.id, 'estates')}} className={'border'} buttonText={'Buy Now'} color={'red'} hoverColor={'white'} hoverBgColor={'transparent'}></Button>
                                </div>
                            </div>
                        </div>
                        {
                            showModal && (
                                <dialog open className="w-4/5 md:w-2/5 h-auto bg-white bg-opacity-95 p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg">
                                    <div className="flex flex-col items-center justify-center text-[#235d62]">
                                        <div className='h-full flex justify-center items-center'><img className='w-1/2' src={success} alt="Success" /></div>
                                        <h3 className="font-bold text-lg">Thank You for Your Interest!</h3>
                                        <p className="py-4">One of Our Agents will Contact You Soon!</p>
                                        <div className="">
                                            <button className="px-3 py-2 font-bold rounded-lg bg-[#235d62] text-white border border-[#235d62] hover:text-[#235d62] hover:bg-transparent transition duration-500" onClick={closeModal}>Okay</button>
                                        </div>
                                    </div>
                                </dialog>
                            )
                        }
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