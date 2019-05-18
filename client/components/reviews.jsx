import React from 'react';
import Review from './Review.jsx';

const Reviews = ({ reviews }) => {
  let left3 = reviews.slice(0, 3);
  let right3 = reviews.slice(3, 6);
  return (
    <div>
      <div className="row">
        <div className="col-6 reviewColumn">
          {left3.map((review, i) => <Review review={review} key={i} />)}
        </div>
        <div className="col-6 reviewColumn">
          {right3.map((review, i) => <Review review={review} key={i} />)}
        </div>
      </div>
      <div className="mt-2">
        <a className="text-left moreReviewsBtn">Read all {reviews.length} reviews</a>
      </div>
    </div>
  );
};

export default Reviews;