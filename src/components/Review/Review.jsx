import PropTypes from 'prop-types';

const Review = ({ review }) => {
    const { client_name, client_image, review_text, review_stars, review_date } = review;
    return (
        <div className='flex flex-col'>
            <div className="flex gap-6 items-center">
                <figure className=''>
                    <img src={client_image} alt={client_name} title={client_name} className="w-12 rounded-full" />
                </figure>
                <div className="">
                    <h3 className="">{client_name}</h3>
                    <h5 className="">{review_date}</h5>
                </div>
            </div>
            <div className="">
                {review_stars}
            </div>
            <p className="">
                {review_text}
            </p>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.object.isRequired,
}

export default Review;