import React from 'react';
import QuestionOptionButton from './QuestionOptionButton';

describe('QuestionOptionButton tests', () => {
  test('has a click function', done => {
    expect.assertions(2);
    const cf = () => {
      expect(true).toBeTruthy();
      done();
    };
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" clickFunction={cf} />
    );
    expect(wrapper.find('div')).toExist();
    wrapper
      .find('button')
      .first()
      .simulate('click');
  });

  test('renders with correct text', () => {
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" />
    );
    expect(wrapper.text()).toMatch('Question This');
  });

  test('renders', () => {
    const wrapper = shallow(<QuestionOptionButton />);
    expect(wrapper.find('div')).toExist();
  });
});
