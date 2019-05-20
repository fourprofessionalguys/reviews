import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const moreReviews = styled.a`
  color: #914669;
  font-size: 16px;
  font-weight: 500;
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
`;

const reviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 10rem;
  max-height: 40rem;
  padding-bottom: 3rem;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.reviews;
    let left3 = reviews.slice(0, 1).concat(reviews.slice(2, 3)).concat(reviews.slice(4, 5));
    let right3 = reviews.slice(1, 2).concat(reviews.slice(3, 4)).concat(reviews.slice(5, 6));
    return (
      <div>
        <div className="row">
          <reviewColumn className="col-6">
            {left3.map((review, i) => <Review review={review} formatDate={this.props.formatDate} key={i} />)}
          </reviewColumn>
          <reviewColumn className="col-6">
            {right3.map((review, i) => <Review review={review} formatDate={this.props.formatDate} key={i} />)}
          </reviewColumn>
        </div>
        <div className="mt-2">
          <moreReviews className="text-left">Read all {reviews.length} reviews</moreReviews>
        </div>
      </div>
    );
  }
}



export default Reviews;