import React from 'react';
import moment from 'moment';
import Axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Reviews from './reviews.jsx';
import ReviewModal from './reviewModal.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', Helvetica Neue, sans-serif;
    font-size: 14px;
    color: #484848;
    line-height: 1.43;
  }
  `;

const Modal = styled.div`
  display: ${props => props.showModal ? "table" : "none"};
  position: fixed;
  width: 100%;
  height: 100vh;
  background: white;
  opacity: 0.7;
  z-index: 3;
  margin-top: -3rem;
  padding: 0;
`;

const PageContainer = styled.div`
  width: 1265px;
  margin: 3rem auto 3rem auto;
`;

const ReviewTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 4rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      isModalShowing: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal() {
    this.setState({ isModalShowing: !this.state.isModalShowing });
  }


  formatDate(date) {
    return String(moment(new Date(date)).fromNow());
  }

  sortByDate(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  componentDidMount() {
    Axios({
      url: 'http://localhost:3003/reviews',
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ listing_id: this.props.listing_id })
    })
      .then(res => res.data)
      .then(data => {
        this.setState(state => {
          data = this.sortByDate(data)
          return {
            reviews: data
          }
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <PageContainer>
          <hr />
          <div className="pt-5">
            <ReviewTitle>Reviews</ReviewTitle>
            <ReviewModal id="modal" isModalShowing={this.state.isModalShowing} toggleModal={this.toggleModal} reviews={this.state.reviews} formatDate={this.formatDate} />
            <Reviews isModalShowing={this.state.isModalShowing} toggleModal={this.toggleModal} reviews={this.state.reviews} formatDate={this.formatDate} />
          </div>
        </PageContainer>
      </div>
    );
  }
}

export default App;