import React from 'react';
import Question from './Question';

describe('Question tests', () => {
  test('renders', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper.find('div')).toExist();
  });
});
