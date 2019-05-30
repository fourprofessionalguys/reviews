import React from 'react';
import styled from 'styled-components';
import Review from './review.jsx';

const ReviewColumn = styled.div`
  &&& { 
    display: flex;
    flex-direction: column;
    align-items: left;
    min-height: 10rem;
    max-height: 40rem;
    padding: 0 0 1.75rem 1.5rem;
    flex-wrap: wrap;
    width: 100%;
    @media (min-width: 740px) {
      width: 50%;
    }
  }
`;

const Reviews = ({ reviews, formatDate }) => {
  let groups = [reviews.slice(0, 2), reviews.slice(2, 4), reviews.slice(4, 6)];
  return (
    <div>
      {groups.map((group, k) =>
        <div className="row" key={k}>
          {group.map((review, i) => (
            <ReviewColumn key={i + k}>
              <Review review={review} formatDate={formatDate} />
            </ReviewColumn>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;