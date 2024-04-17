import { useEffect, useState } from "react";
import { getStoredItems, removeFromLocal } from "../../utilities/local-storage";
import { useLoaderData } from "react-router-dom";
import FavoriteEstate from "../../components/FavoriteEstate/FavoriteEstate";

const Favorites = () => {
    const [favEstates, setFavEstates] = useState([]);
    const estates = useLoaderData();
    const [estateLoading, setEstateLoading] = useState(true);

    useEffect(() => {
        setEstateLoading(true);
        const localEstates = getStoredItems('estates');
        let filteredEstates = [];
        for (const id of localEstates) {
            const filteredEstate = estates.find(estate => estate.id === id);
            filteredEstates.push(filteredEstate);
        }
        setFavEstates(filteredEstates);
        setEstateLoading(false);
    }, [estates])

    const handleDelete = (id, key) => {
        setEstateLoading(true);
        removeFromLocal(id, key);
        const newLocalEstates = getStoredItems(key);
        let remainingEstates = [];
        for (const id of newLocalEstates) {
            const remainingEstate = estates.find(estate => estate.id === id);
            remainingEstates.push(remainingEstate);
        }
        setFavEstates(remainingEstates);
        setEstateLoading(false);
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
            <h4
                data-aos="fade-top"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="text-center text-xl md:text-3xl font-bold">Favorite Estates</h4>
            <hr className="my-8 border-dotted border-t-2 border-teal-900" />
            {
                favEstates.length < 1 && <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="h-[67vh] flex items-center justify-center">
                    <h4 className="border shadow-lg shadow-red-800 border-red-600 p-6 text-xl md:text-3xl font-bold text-red-600 bg-red-100">Your Favorites List is Empty! </h4>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    favEstates?.map(estate => <FavoriteEstate key={estate.id} estate={estate} handleDelete={handleDelete} estateLoading={estateLoading}></FavoriteEstate>)
                }
            </div>
        </section>
    );
};

export default Favorites;