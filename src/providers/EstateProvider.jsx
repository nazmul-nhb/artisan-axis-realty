import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

export const EstateContext = createContext(null);

const EstateProvider = ({ children }) => {
    const [estates, setEstates] = useState([]);
    const [estateLoading, setEstateLoading] = useState(true);

    useEffect(() => {
        setEstateLoading(true);
        fetch('estate-data.json')
            .then(respond => respond.json())
            .then(data => setEstates(data))
        setEstateLoading(false);
    }, [])

    const estateInfo = { estates, estateLoading, setEstateLoading };

    return (
        <EstateContext.Provider value={estateInfo}>
            {children}
        </EstateContext.Provider>
    );
};

EstateProvider.propTypes = {
    children: PropTypes.node
}

export default EstateProvider;