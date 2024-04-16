import { useEffect } from "react";
import { getStoredItems } from "../../utilities/local-storage";

const Favorites = () => {

    useEffect(() => {
        getStoredItems('estates');
        
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Favorites;