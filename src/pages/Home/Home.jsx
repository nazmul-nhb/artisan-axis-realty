import { useContext } from "react";
import { EstateContext } from "../../providers/EstateProvider";

const Home = () => {
    const {estates} = useContext(EstateContext);

    return (
        <>
            {
                estates.map(estate=> console.log(estate))
            }
        </>
    );
};

export default Home;