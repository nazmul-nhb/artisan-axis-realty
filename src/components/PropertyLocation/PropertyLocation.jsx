import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import "./PropertyLocation.css";

const PropertyLocation = ({ selectedEstate }) => {
    const { estate_title, location } = selectedEstate;
    const { position, street, city } = location;

    // const position = [23.6850, 90.3563];

    return (
        <MapContainer className='z-0' center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <div className='flex flex-col gap-1 items-center'>
                        <h4 className="font-semibold text-base">{estate_title}</h4>
                        <h4 className="font-medium text-sm">{street}, {city}</h4>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

PropertyLocation.propTypes = {
    selectedEstate: PropTypes.object.isRequired,
}

export default PropertyLocation;