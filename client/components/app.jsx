import React from 'react';
import moment from 'moment';
import styled, { createGlobalStyle } from 'styled-components';
import Reviews from './reviews.jsx';

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
      showModal: false
    };

    this.handleShow = this.handleShow.bind(this);
  }


  handleShow() {
    this.setState({ showModal: !this.state.showModal });
  }


  formatDate(date) {
    return String(moment(new Date(date)).fromNow());
  }

  sortByDate(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  componentDidMount() {
    fetch('http://localhost:3003/reviews', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ listing_id: this.props.listing_id })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Modal showModal={this.state.showModal} onClick={this.handleShow} ></Modal>
        <PageContainer>
          <hr />
          <div className="pt-5">
            <ReviewTitle>Reviews</ReviewTitle>
            <Reviews showModal={this.state.showModal} handleShow={this.handleShow} reviews={this.sortByDate(this.state.reviews)} formatDate={this.formatDate} />
          </div>
        </PageContainer>
      </div>
    );
  }
}

export default App;