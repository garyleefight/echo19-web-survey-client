import React from 'react';
import QuestionOptionButton from './QuestionOptionButton';

describe('QuestionOptionButton tests', () => {
  test('click function gets passed argument of answer id', () => {
    expect.assertions(1);
    const cf = id => {
      expect(id).toBe('my-id');
    };
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" cf={cf} id="my-id" />
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
  });

  test('has a click function', done => {
    expect.assertions(2);
    const cf = () => {
      expect(true).toBeTruthy(); // if it doesn't get here, the click didn't work...
      done();
    };
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" cf={cf} id="id" />
    );
    expect(wrapper.find('div')).toExist();
    wrapper
      .find('button')
      .first()
      .simulate('click');
  });

  test('renders with correct text', () => {
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" cf={jest.fn} id="id" />
    );
    expect(wrapper.text()).toMatch('Question This');
  });

  test('renders', () => {
    const wrapper = shallow(
      <QuestionOptionButton optionText="Question This" cf={jest.fn} id="id" />
    );
    expect(wrapper.find('div')).toExist();
  });
});
