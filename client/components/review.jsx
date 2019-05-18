import React from 'react';

const Review = ({ review, formatDate }) => {

  return (
    <div className="reviewBox">
      <div className="reviewBox">
        <div className="viewBox">
          <div className="imageBox">
            <img src={review.photo} alt="" className="imageBox" />
          </div>
        </div>
        <div className="viewBox">
          <span className="reviewName">{review.user}</span>
          <div className="reviewDate">{formatDate(review.date)}</div>
        </div>
      </div>
      <div className="reviewText">{review.text}</div>
    </div>
  );
}

export default Review;