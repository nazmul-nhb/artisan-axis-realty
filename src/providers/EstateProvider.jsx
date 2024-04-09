import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

export const EstateContext = createContext(null);

const EstateProvider = ({ children }) => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('./estate-data.json')
            .then(respond => respond.json())
            .then(data => setEstates(data))
    }, [])

    const estateInfo = { estates };

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