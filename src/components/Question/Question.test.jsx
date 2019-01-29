import React from 'react';

import Question from './Question';
import QuestionOptions from '../QuestionOptions/QuestionOptions';

const q = {
  id: '35767',
  intro: undefined,
  goal: undefined,
  endMessage: undefined,
  questionText: 'Hi [voter name]. Let’s begin!',
  questionHelp: 'Hi [voter name]. Let’s begin!',
  questionOptions: [{ id: '35767-1', optionText: 'OK', optionHelp: 'OK' }]
};

describe('Question tests', () => {
  test('question options has options', () => {
    const wrapper = shallow(<Question question={q} />);
    expect(
      wrapper
        .find(QuestionOptions)
        .dive()
        .instance().props.questionOptions[0].id
    ).toBe('35767-1');
  });

  test('has question options', () => {
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.find(QuestionOptions)).toExist();
  });

  test('renders with a question', () => {
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.text()).toMatch(/Hi \[voter name\]\. Let’s begin!/);
  });

  test('renders', () => {
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.find('div')).toExist();
  });
});
