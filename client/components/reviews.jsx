import React from 'react';
import Review from './Review.jsx';

const Reviews = ({ reviews, formatDate }) => {
  let left3 = reviews.slice(0, 1).concat(reviews.slice(2, 3)).concat(reviews.slice(4, 5));
  let right3 = reviews.slice(1, 2).concat(reviews.slice(3, 4)).concat(reviews.slice(5, 6));
  return (
    <div>
      <div className="row">
        <div className="col-6 reviewColumn">
          {left3.map((review, i) => <Review review={review} formatDate={formatDate} key={i} />)}
        </div>
        <div className="col-6 reviewColumn">
          {right3.map((review, i) => <Review review={review} formatDate={formatDate} key={i} />)}
        </div>
      </div>
      <div className="mt-2">
        <a id="moreReviewsBtn" className="text-left">Read all {reviews.length} reviews</a>
      </div>
    </div>
  );
};

export default Reviews;