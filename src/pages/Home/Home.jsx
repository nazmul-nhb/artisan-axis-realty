import { useContext } from "react";
import { EstateContext } from "../../providers/EstateProvider";
import Estate from "../../components/Estate/Estate";

const Home = () => {
    const { estates, estateLoading } = useContext(EstateContext);
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
        <>

            <div className="mx-4 md:mx-8 my-2 md:my-8 p-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </>
    );
};

export default Home;