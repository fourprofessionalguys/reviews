import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Reviews from './components/reviews.jsx';

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
      <div className="pageContainer">
        <hr />
        <div className="pt-5">
          <h1 className="reviewTitle mb-4">Reviews</h1>
          <Reviews reviews={this.state.reviews} formatDate={this.formatDate} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App listing_id={1} />, document.getElementById('app'));