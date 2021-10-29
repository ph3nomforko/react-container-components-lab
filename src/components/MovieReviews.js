// Code MovieReviews Here
import React from "react";
import Review from "./Review"

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews