import React from 'react';
import styled from 'styled-components';


const ReviewBox = styled.div`
  &&& {
    padding: 14px 18px 0 0;
    width: 100%;
    line-height: 1.43;
  }
`;

const ViewBox = styled.div`
  &&& {
    padding-bottom: 0.65rem;
  }
`;

const ImageBox = styled.div`
  &&& {
    position: relative;
    height: 48px;
    width: 48px;
    margin-right: 1rem;
    display: block;
  }
  `;

const CustomImage = styled.img`
  &&& {
    max-height: 48px;
    width: auto;
    display: block;
    vertical-align: middle;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
  }
`;

const ReviewName = styled.span`
  &&& {
  
    font-size: 16px;
    font-weight: 500;
    line-height: 1.375rem;
    margin: 0;
  }
`;

const ReviewDate = styled.div`
  &&& {
  
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2857142857142858rem;
    margin: 0;
  }
`;

const FlexBox = styled.div`
  &&& { 
    display: inline-block;
    width: 100%;
  }
`;

const ReviewText = styled.div`
  &&& { 
    font-size: 16px;
    font-weight: 300;
    line-height: 1.375rem;
    padding: 0 2rem 0 0;
    overflow-wrap: break-word;
  }
`;


const Review = ({ review, formatDate }) => {
  return (
    <ReviewBox id="rreviews_eviewBox">
      <ReviewBox id="reviews_innerReviewBox">
        <ViewBox id="reviews_viewBox">
          <ImageBox id="reviews_imageBox">
            <CustomImage id="reviews_customImage" className="reviewPhoto" src={review.photo} alt=""></CustomImage>
          </ImageBox>
        </ViewBox>
        <ViewBox id="reviews_viewBox2">
          <ReviewName id="reviews_reviewName" className="reviewUser">{review.user}</ReviewName>
          <ReviewDate id="reviews_reviewDate" className="reviewDate">{formatDate(review.date)}</ReviewDate>
        </ViewBox>
      </ReviewBox>
      <FlexBox id="reviews_flexbox">
        <ReviewText id="reviews_reviewText" className="reviewText">{review.text}</ReviewText>
      </FlexBox>
    </ReviewBox>
  );
}

export default Review;