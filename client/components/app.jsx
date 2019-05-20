import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Reviews from './reviews.jsx';


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
      reviews: []
    };
  }

  formatDate(date) {
    return String(moment(new Date(date)).fromNow());
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
      <PageContainer>
        <hr />
        <div className="pt-5">
          <ReviewTitle>Reviews</ReviewTitle>
          <Reviews reviews={this.state.reviews} formatDate={this.formatDate} />
        </div>
      </PageContainer>
    );
  }
}

export default App;