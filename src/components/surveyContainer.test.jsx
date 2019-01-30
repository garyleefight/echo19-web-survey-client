import React from 'react';
import SurveyContainer from './SurveyContainer';
import Question from './Question/Question';
import survey from '../mock/questions.json';

// this is here to wait for an async call - making sure that the prior one finishes...
const waitForAsync = () => new Promise(resolve => setImmediate(resolve));

describe('survey container tests', () => {
  // test('container has a click function that can get next question', async () => {
  //   const wrapper = shallow(<SurveyContainer />);
  //   await waitForAsync(); // see comment above...
  //   expect(wrapper.instance().state.question.questionText).toMatch(
  //     /Hi \[voter name\]\. Let’s begin!/
  //   );
  //   wrapper.instance().answerClicked();
  //   await wrapper.update();
  //   await waitForAsync(); // see comment above...
  //   console.log(wrapper);
  //   expect(wrapper.instance().state.question.questionText).toMatch(
  //     /First, let’s start with do you like ice cream\?/
  //   );
  // });

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
    ).toMatch(/Hi \[voter name\]\. Let’s begin!/);
  });

  test('contains survey questions', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().questionParser.questions[0].id).toBe('35767');
  });

  test('can mount', () => {
    const wrapper = shallow(<SurveyContainer survey={survey} />);
    expect(wrapper.find('div')).toExist();
  });
});
