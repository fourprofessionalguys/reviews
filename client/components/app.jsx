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

const BodyContainer = styled.div`
  display: ${props => props.isModalShowing ? "fixed" : "block"};
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  padding: 0;
`;

const PageContainer = styled.div`
  width: 1265px;
  margin: 3rem auto 3rem auto;
  opacity: ${props => props.isModalShowing ? "0.5" : "1.0"};
`;

const ModalContainer = styled.div`
  display: ${props => props.isModalShowing ? "table" : "none"};
  display: fixed;
`;

const ReviewTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 4rem;
`;

const MoreReviews = styled.a`
  font-size: 16px;
  font-weight: 500;
  -webkit-writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  cursor: pointer;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      isModalShowing: false,
      isModalSelected: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.selectModal = this.selectModal.bind(this);
  }


  toggleModal() {
    this.setState({
      isModalShowing: !this.state.isModalShowing,
      isModalSelected: false
    });
  }

  selectModal() {
    this.setState({
      isModalSelected: true
    });
  }


  formatDate(date) {
    return String(moment(new Date(date)).fromNow());
  }

  sortByDate(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  componentDidMount() {
    Axios({
      url: 'http://localhost:3003/reviews/2',
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
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
      <BodyContainer isModalShowing={this.state.isModalShowing}>
        <GlobalStyle />
        <ModalContainer isModalShowing={this.state.isModalShowing}>
          <ReviewModal
            id="modal"
            isModalShowing={this.state.isModalShowing}
            isModalSelected={this.state.isModalSelected}
            selectModal={this.selectModal}
            toggleModal={this.toggleModal}
            reviews={this.state.reviews}
            formatDate={this.formatDate}
          />
        </ModalContainer>
        <PageContainer isModalShowing={this.state.isModalShowing} onClick={() => this.toggleModal()}>
          <hr />
          <div className="pt-5">
            <ReviewTitle>Reviews</ReviewTitle>
            <Reviews isModalShowing={this.state.isModalShowing} toggleModal={this.toggleModal} reviews={this.state.reviews} formatDate={this.formatDate} />
            <div className="mt-2">
              <MoreReviews
                id="moreReviews"
                style={{ 'color': '#914669' }}
                onClick={this.toggleModal}
              >
                Read all {this.state.reviews.length} reviews
              </MoreReviews>
            </div>
          </div>
        </PageContainer>
      </BodyContainer>
    );
  }
}

export default App;