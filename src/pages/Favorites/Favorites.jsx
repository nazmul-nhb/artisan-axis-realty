import { useEffect, useState } from "react";
import { getStoredItems } from "../../utilities/local-storage";
import { useLoaderData } from "react-router-dom";
import FavoriteEstate from "../../components/FavoriteEstate/FavoriteEstate";

const Favorites = () => {
    const [favEstates, setFavEstates] = useState([])
    const estates = useLoaderData();

    useEffect(() => {
        const localEstates = getStoredItems('estates');
        console.log(localEstates);
        let filteredEstates = [];
        for (const id of localEstates) {
            const filteredEstate = estates.find(estate => estate.id === id);
            filteredEstates.push(filteredEstate);
        }
        setFavEstates(filteredEstates);
    }, [estates])

    console.log(favEstates);

    return (
        <section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    favEstates?.map(estate => <FavoriteEstate key={estate.id} estate={estate}></FavoriteEstate>)
                }
            </div>
        </section>
    );
};

export default Favorites;