import React from 'react';
import QuestionOptions from './QuestionOptions';

describe('QuestionOptions tests', () => {
  test('renders', () => {
    const wrapper = shallow(<QuestionOptions />);
    expect(wrapper.find('div')).toExist();
  });
});
