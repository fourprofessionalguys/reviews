import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const MoreReviews = styled.a`
  font-size: 16px;
  font-weight: 500;
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
`;

const ReviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 10rem;
  max-height: 40rem;
  padding-bottom: 1.75rem;
`;

const Reviews = ({ reviews, formatDate }) => {
  let groups = [reviews.slice(0, 2), reviews.slice(2, 4), reviews.slice(4, 6)];
  return (
    <div>
      {groups.map(group =>
        <div className="row">
          {group.map((review, i) => (
            <ReviewColumn className="col-6">
              <Review review={review} formatDate={formatDate} key={i} />
            </ReviewColumn>
          ))}
        </div>
      )}
      <div className="mt-2">
        <MoreReviews style={{ 'color': '#914669' }}>Read all {reviews.length} reviews</MoreReviews>
      </div>
    </div >
  );
}

export default Reviews;