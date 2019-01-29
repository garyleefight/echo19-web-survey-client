import React from 'react';
import Question from './Question';

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
  test('renders', () => {
    const wrapper = shallow(<Question question={q} />);
    expect(wrapper.find('div')).toExist();
  });
});
