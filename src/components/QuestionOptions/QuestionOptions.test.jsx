import React from 'react';
import QuestionOptions from './QuestionOptions';

const qo = [
  {
    id: '159350',
    optionText: '10 or more'
  },
  {
    id: '159351',
    digit: '2',
    optionText: '6 to 9 times per month'
  },
  {
    id: '159352',
    digit: '3',
    optionText: '3 to 5 times per month'
  },
  {
    id: '159353',
    digit: '4',
    optionText: '1 to 2 times per month'
  },
  {
    id: '159354',
    digit: '5',
    optionText: 'less than once a month'
  }
];

describe('QuestionOptions tests', () => {
  test('has options rendered to page', () => {
    const wrapper = shallow(<QuestionOptions questionOptions={qo} />);
    expect(wrapper.text()).toMatch(/less than once a month/);
  });

  test('has opttions param', () => {
    const wrapper = shallow(
      <QuestionOptions
        questionOptions={[{ id: '35767-1', optionText: 'OK' }]}
      />
    );
    expect(wrapper.instance().props.questionOptions[0].id).toBe('35767-1');
  });

  test('renders', () => {
    const wrapper = shallow(
      <QuestionOptions
        questionOptions={[{ id: 'dummy', optionText: 'dum-dum' }]}
      />
    );
    expect(wrapper.find('div')).toExist();
  });
});
