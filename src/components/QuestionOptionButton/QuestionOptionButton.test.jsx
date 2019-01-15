import React from 'react';
import QuestionOptionButton from './QuestionOptionButton';

describe('QuestionOptionButton tests', () => {
  test('renders', () => {
    const wrapper = shallow(<QuestionOptionButton />);
    expect(wrapper.find('div')).toExist();
  });
});
