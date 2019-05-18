import React from 'react';

const Review = ({ review }) => {

  return (
    <div className="reviewBox">
      <div className="titleBox">
        <div className="titleBox">
          <div className="imageBox">
            <img src="" alt="" />
          </div>
        </div>
        <div className="titleBox">
          <span className="reviewName">{review.user}</span>
          <div className="reviewDate">{new Date(review.date).toString()}</div>
        </div>
      </div>
      <div className="reviewText">{review.text}</div>
    </div>
  );
}

export default Review;