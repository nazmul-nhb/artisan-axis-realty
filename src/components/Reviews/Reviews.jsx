import { useEffect, useState } from "react";
import Review from "../Review/Review";

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
        <div className="my-8 md:my-16 ">
            <h3 className="mt-8 md:mt-16 text-xl md:text-5xl font-bold md:leading-snug text-center">Reviews from Our Clients</h3>
            <div>
                {
                    reviews?.map(review => <Review key={review.review_id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;