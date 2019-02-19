import React from 'react';
import QuestionOptionButton from './QuestionOptionButton';

const normalProps = {
  response: { key: 'my-key', value: 'my-value' },
  id: 'my-id'
};

describe('QuestionOptionButton tests', () => {
  test('click function passes key value pair argument', () => {
    expect.assertions(3);
    const cf = (id, response) => {
      expect(id).toBe('my-id');
      expect(response.key).toBe('my-key');
      expect(response.value).toBe('my-value');
    };
    const wrapper = shallow(
      <QuestionOptionButton
        optionText="question?"
        cf={cf}
        id="my-id"
        {...normalProps}
      />
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
  });

  test('click function gets passed argument of answer id', () => {
    expect.assertions(1);
    const cf = id => {
      expect(id).toBe('my-id');
    };
    const wrapper = shallow(
      <QuestionOptionButton
        optionText="Question This"
        cf={cf}
        {...normalProps}
      />
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
      <QuestionOptionButton
        optionText="Question This"
        cf={cf}
        {...normalProps}
      />
    );
    expect(wrapper.find('div')).toExist();
    wrapper
      .find('button')
      .first()
      .simulate('click');
  });

  test('renders with correct text', () => {
    const wrapper = shallow(
      <QuestionOptionButton
        optionText="Question This"
        cf={jest.fn}
        {...normalProps}
      />
    );
    expect(wrapper.text()).toMatch('Question This');
  });

  test('renders', () => {
    const wrapper = shallow(
      <QuestionOptionButton
        optionText="Question This"
        cf={jest.fn}
        {...normalProps}
      />
    );
    expect(wrapper.find('div')).toExist();
  });
});
