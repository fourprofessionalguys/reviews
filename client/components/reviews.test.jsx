import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from './reviews.jsx';

describe('Reviews', () => {

  test('should display modal when "view more reviews" button is clicked', () => {
    const showHandler = jest.fn();

    const wrapper = mount(
      <Reviews
        handleshow={showHandler}
      />
    );

    wrapper.find(<MoreReviews></MoreReviews>).simulate('click');
    expect(showHandler).toBeCalled();
  });
});