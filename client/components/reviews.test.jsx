import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from './reviews.jsx';
import MoreReviews from './reviews.jsx';
import database from '../../server/db/dbConfig.js';

describe('Reviews', () => {

  test('should display modal when "view more reviews" button is clicked', (done) => {
    database('reviews').select('*').whereIn('listing_id', [2]).then(reviewsData => {
      const showHandler = jest.fn();

      const wrapperDiv = shallow(
        <Reviews
          handleShow={showHandler}
          reviews={reviewsData}
        />
      );

      wrapperDiv.find("#moreReviews").simulate('click');
      expect(showHandler).toBeCalled();
      done();
    });
  });
});