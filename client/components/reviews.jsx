import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import ReviewsModalBody from './reviewsModalBody.jsx';
import { Modal, Button } from 'react-bootstrap';

const MoreReviews = styled.a`
  font-size: 16px;
  font-weight: 500;
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  cursor: pointer;
`;

const ReviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 10rem;
  max-height: 40rem;
  padding-bottom: 1.75rem;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  sortByDate(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  render() {
    let reviews = this.props.reviews;
    let formatDate = this.props.formatDate;
    let groups = [reviews.slice(0, 2), reviews.slice(2, 4), reviews.slice(4, 6)];
    return (
      <div>
        {groups.map((group, k) =>
          <div className="row">
            {group.map((review, i) => (
              <ReviewColumn key={i + k + 1} className="col-6">
                <Review review={review} formatDate={formatDate} key={i + k + 1} />
              </ReviewColumn>
            ))}
          </div>
        )}
        <div className="mt-2">
          <MoreReviews
            style={{ 'color': '#914669' }}
            onClick={this.handleShow}
          >
            Read all {reviews.length} reviews
          </MoreReviews>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <ReviewsModalBody reviews={this.sortByDate(reviews)} formatDate={formatDate} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Reviews;