import React from 'react';
import SurveyContainer from './SurveyContainer';
import Question from './Question/Question';
import survey from '../mock/questions.json';

// this is here to wait for an async call - making sure that the prior one finishes...
const waitForAsync = () => new Promise(resolve => setImmediate(resolve));

describe('survey container tests', () => {
  // test('when complete is set, show end message', () => {
  //   const wrapper = shallow(<SurveyContainer survey={survey} />);
  //   expect(wrapper.instance().state.complete).toBe(false);
  //   wrapper.instance().answerClicked('159349');
  //   console.log(wrapper.instance().state.question);
  //   expect(wrapper.text()).toMatch(/This call was paid for by Chocolate Cows/);
  // });

  test('end message gets set', () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    expect(wrapper.instance().state.endMessage).toMatch(
      /This call was paid for by Chocolate Cows/
    );
  });

  test('when done set state to complete', () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    expect(wrapper.instance().state.question.questionText).toMatch(
      /Hello! This is \[volunteer name\] from Chocolate Cows/
    );
    expect(wrapper.instance().state.complete).toBe(false);
    wrapper.instance().answerClicked('159349');
    expect(wrapper.instance().state.complete).toBe(true);
  });

  test('child has button with click function', async () => {
    const wrapper = mount(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.question.questionText).toMatch(
      /Hello! This is \[volunteer name\] from Chocolate Cows/
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
    wrapper
      .find('button')
      .first()
      .simulate('click');
    wrapper.update();
    expect(wrapper.instance().state.question.questionText).toMatch(
      /First, let’s start with do you like ice cream\?/
    );
  });

  test('container has a click function that can get next question', async () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.question.questionText).toMatch(
      /Hello! This is \[volunteer name\] from Chocolate Cows/
    );
    wrapper.instance().answerClicked('35767-1');
    expect(wrapper.instance().state.question.questionText).toMatch(
      /First, let’s start with do you like ice cream\?/
    );
  });

  test('container stores question in state', async () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.question).toBeDefined();
  });

  test('once questions loaded shows a question component', async () => {
    expect.assertions(2);
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.find('.surveyContainer')).toExist();
    expect(wrapper.find(Question)).toExist();
  });

  test('question shows after questions loaded', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(
      wrapper
        .find(Question)
        .dive()
        .text()
    ).toMatch(/Hello! This is \[volunteer name\] from Chocolate Cows/);
  });

  test('contains survey questions', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().questionParser.questions[0].id).toBe('intro');
  });

  test('can mount', () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    expect(wrapper.find('div')).toExist();
  });
});
