import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import { MdOutlineAreaChart } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Estate = ({ estate }) => {
    const { id, estate_image, estate_title, segment_name, price, status, area, additional_info_1, location } = estate;
    return (
        <div data-aos="zoom-out-left" data-aos-delay="500" data-aos-duration="1000" className={`flex flex-col gap-3 border p-4 rounded-lg shadow-md ${status === 'sale' ? 'shadow-[#16a34a]' : 'shadow-[#ea580c]'}`}>
            <Link to={`/${id}`}>
                <figure className='w-full'>
                    <img className='hover:scale-105 transition-all duration-500 rounded-lg' src={estate_image} alt={estate_title} />
                </figure>
            </Link>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <h4 className={`${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'} text-xs xl:text-sm`}>{segment_name}</h4>
                    <div className='flex gap-2 items-center'>
                        <h3 className={`text-sm xl:text-base font-semibold ${status === 'sale' ? 'text-[#16a34a]' : 'text-[#ea580c]'}`} title={`${status === 'sale' ? 'Sale' : 'Rent'}`} >{estate_title}</h3>
                        <div className={`w-5 h-5 text-xs flex items-center justify-center font-bold text-white rounded-full ${status === 'sale' ? 'bg-green-600' : 'bg-orange-600'}`} title={`${status === 'sale' ? 'Sale' : 'Rent'}`}>{status === 'sale' ? "S" : "R"}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className={`flex justify-end items-center gap-1 text-gray-500 text-xs xl:text-sm ${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}><MdOutlineAreaChart />{area}</h4>
                    <h2 className={`flex justify-end text-sm xl:text-lg font-bold ${status === 'sale' ? 'text-[#16a34a]' : 'text-[#ea580c]'}`} title={`Price: ${price}`}>{price}</h2>
                </div>
            </div>
            <div className={`flex-grow flex gap-2 text-sm lg:text-base ${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                <h4 className="font-semibold">{additional_info_1?.split(': ')[0]}:</h4>
                <h4 className="">{additional_info_1?.split(': ')[1]}</h4>
            </div>
            <hr className={`"border-0 border-t bg-white" ${status === 'sale' ? 'border-[#457456]' : 'border-[#8d6a57]'}`} />
            <div className={`flex justify-between items-center ${status === 'sale' ? 'text-[#457456]' : 'text-[#8d6a57]'}`}>
                <div className="text-xs xl:text-sm flex items-center gap-1"><GrLocation />{location?.street}, {location?.city}</div>
                <Link className='' to={`/${id}`}><Button className={'font-bold border text-xs xl:text-sm'} buttonText={'View Property'} color={`${status === 'sale' ? '#16a34a' : '#ea580c'}`} hoverColor={'white'} hoverBgColor={'transparent'}></Button></Link>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object.isRequired,
}

export default Estate;