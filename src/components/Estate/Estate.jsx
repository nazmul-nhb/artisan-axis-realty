import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
    const { id, estate_image, estate_title, segment_name, price, status, area, additional_info_1, location } = estate;
    return (
        <div className='flex flex-col gap-3'>
            <figure><img src={estate_image} alt={estate_title} /></figure>
            <div className="">
                <div className="">
                    <h4 className="">{segment_name}</h4>
                    <div className='flex gap-2 items-center'>
                        <h3 className=""  title={`${status === 'sale' ? 'Sale' : 'Rent'}`} >{estate_title}</h3>
                        <div className={`w-5 h-5 text-xs flex items-center justify-center font-bold text-white rounded-full ${status === 'sale' ? 'bg-green-600' : 'bg-orange-600'}`} title={`${status === 'sale' ? 'Sale' : 'Rent'}`}>{status === 'sale' ? "S" : "R"}</div>
                    </div>
                </div>
                <h2 className="">{price}</h2>
            </div>
            <div className="">
                <h4 className="">{area}</h4>
                <div className="flex gap-3">
                    <h4 className="font-semibold">{additional_info_1.split(': ')[0]}:</h4>
                    <h4 className="text-teal-800">{additional_info_1.split(': ')[1]}</h4>
                </div>
            </div>
            <hr className="border-0 border-t border-teal-900 bg-white" />
            <div className="">
                <div className="">{location.street}, {location.city}-{location.zip_code}</div>
                <button className="nhb-button"><Link to={`/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object.isRequired,
}

export default Estate;