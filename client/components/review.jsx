import React from 'react';
import styled from 'styled-components';


const reviewBox = styled.div`
  padding: 18px 18px 18px 0;
  line-height: 1.43;
`;

const viewBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-bottom: 0.65rem;
`;

const imageBox = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 10rem;
  margin-right: 1rem;
  display: block;
`;

const reviewName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375rem;
  margin: 0;
`;

const reviewDate = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2857142857142858rem;
  margin: 0;
`;

const reviewText = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.375rem;
  word-wrap: break-word;
  padding: 0 2rem 0 0;
`;


class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <reviewBox>
        <reviewBox>
          <viewBox>
            <imageBox>
              <imageBox src={this.props.review.photo} alt=""></imageBox>
            </imageBox>
          </viewBox>
          <viewBox>
            <reviewName>{this.props.review.user}</reviewName>
            <reviewDate>{this.props.formatDate(this.props.review.date)}</reviewDate>
          </viewBox>
        </reviewBox>
        <reviewText>{this.props.review.text}</reviewText>
      </reviewBox>
    );
  }

}

export default Review;