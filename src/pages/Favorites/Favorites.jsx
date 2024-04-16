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
        const localEstates = getStoredItems(key);
        setFavEstates(localEstates);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    favEstates?.map(estate => <FavoriteEstate key={estate.id} estate={estate} handleDelete={handleDelete} estateLoading={estateLoading}></FavoriteEstate>)
                }
            </div>
        </section>
    );
};

export default Favorites;