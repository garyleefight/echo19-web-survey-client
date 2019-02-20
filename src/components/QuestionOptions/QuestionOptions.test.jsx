import React from 'react';
import QuestionOptions from './QuestionOptions';
import QuestionOptionButton from '../QuestionOptionButton/QuestionOptionButton';

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

const cf = jest.fn();

const normalProps = {
  questionId: 'question-id',
  questionOptions: qo,
  cf
};

describe('QuestionOptions tests', () => {
  test('question id gets passed to question option button', () => {
    const wrapper = shallow(<QuestionOptions {...normalProps} />);
    expect(
      wrapper
        .find(QuestionOptionButton)
        .first()
        .dive()
        .instance().props.questionId
    ).toBe('question-id');
  });

  test('options have option buttons', () => {
    const wrapper = shallow(<QuestionOptions {...normalProps} />);
    expect(wrapper.find(QuestionOptionButton)).toExist();
  });

  test('has 5 options rendered to page', () => {
    const wrapper = shallow(<QuestionOptions {...normalProps} />);
    expect(wrapper.find(QuestionOptionButton)).toHaveLength(5);
  });

  test('has options param', () => {
    const wrapper = shallow(
      <QuestionOptions
        questionOptions={[{ id: '35767-1', optionText: 'OK' }]}
        cf={cf}
        questionId="question-id"
      />
    );
    expect(wrapper.instance().props.questionOptions[0].id).toBe('35767-1');
  });

  test('renders', () => {
    const wrapper = shallow(<QuestionOptions {...normalProps} />);
    expect(wrapper.find('div')).toExist();
  });
});
