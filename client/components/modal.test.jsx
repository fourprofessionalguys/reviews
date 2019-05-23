import React from 'react';
import { shallow, mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter'
import App from './app.jsx';
import Reviews from './reviews.jsx';
import database from '../../server/db/dbConfig.js';

describe('Modal', () => {

  it('renders modals', () => {
    const wrapper = shallow(<App listing_id={2} />);
    expect(wrapper.find('#modal').length).toEqual(1);
  })

  it('opens modal when button is clicked', () => {
    const showHandler = jest.fn();
    const wrapper = shallow(<App listing_id={2} />);
    const reviewsWrapper = shallow(<Reviews reviews={[]} toggleModal={showHandler} />);
    const modalButton = reviewsWrapper.find('#moreReviews');
    const modal = reviewsWrapper.find("#modal");

    modalButton.simulate('click')
    expect(modal.prop('isModalShowing')).toEqual(true);

  });

  // test('tests if the number of objects in state match the database contents for a given listings_id', async (done) => {
  // const listingId = 2;
  // const wrapper = shallow(<App listing_id={listingId} />);
  // Promise.resolve(mount(<App listing_id={listingId} />))
  // .then((wrapper) => {
  // await wrapper.instance().componentDidMount();
  // await wrapper.update();
  // return wrapper;
  // })
  // .then(wrapper => {
  // let reviewState = wrapper.state().reviews;
  // console.log('---------------', reviewState, '----------------------')
  // database('reviews').select('text').whereIn('listing_id', [listingId]).then((dbReviews) => {
  //   let reviewStateText = reviewState.map(review => review.text);
  //   expect(reviewState.length).toEqual(dbReviews.length);
  //   expect(reviewStateText).toEqual(expect.arrayContaining(dbReviews));
  //   done();
  // });
  // });
  // });
});