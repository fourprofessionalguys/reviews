import React from 'react';
import styled from 'styled-components';


const ReviewBox = styled.div`
  padding: 14px 18px 0 0;
  line-height: 1.43;
`;

const ViewBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-bottom: 0.65rem;
`;

const ImageBox = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 10rem;
  margin-right: 1rem;
  display: block;
`;

const ReviewName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375rem;
  margin: 0;
`;

const ReviewDate = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2857142857142858rem;
  margin: 0;
`;

const ReviewText = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.375rem;
  word-wrap: break-word;
  padding: 0 2rem 0 0;
`;


const Review = ({ review, formatDate }) => {
  return (
    <ReviewBox>
      <ReviewBox>
        <ViewBox>
          <ImageBox src={review.photo} alt=""></ImageBox>
        </ViewBox>
        <ViewBox>
          <ReviewName>{review.user}</ReviewName>
          <ReviewDate>{formatDate(review.date)}</ReviewDate>
        </ViewBox>
      </ReviewBox>
      <ReviewText>{review.text}</ReviewText>
    </ReviewBox>
  );
}

export default Review;