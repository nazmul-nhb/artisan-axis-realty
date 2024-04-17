import { useEffect, useState } from "react";
import Review from "../Review/Review";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [reviewLoading, setReviewLoading] = useState(true);
    useEffect(() => {
        setReviewLoading(true);
        fetch('./reviews.json')
            .then(respond => respond.json())
            .then(data => setReviews(data))
        setReviewLoading(false);
    }, [])

    if (reviewLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-5 h-5 rounded-full animate-pulse dark:bg-red-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-red-600"></div>
            </div>
        )
    }

    return (
        <div className="my-8 md:mt-16">
            <h3 className="mt-16 mb-4 md:mb-8 text-xl md:text-5xl font-bold md:leading-snug text-center">Reviews from Our Clients</h3>
            <Marquee pauseOnHover={true}>
                <div className="flex">
                    {
                        reviews?.map(review => <Review key={review.review_id} review={review}></Review>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Reviews;