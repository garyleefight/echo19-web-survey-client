import React from 'react';
import SurveyContainer from './SurveyContainer';
import Question from './Question/Question';

import survey from '../mock/questions.json';

// this is here to wait for an async call - making sure that the prior one finishes...
const waitForAsync = () => new Promise(resolve => setImmediate(resolve));

describe('survey container tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });

  test('once questions loaded shows a question component', async () => {
    expect.assertions(2);
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(wrapper.find('.gothere')).toExist();
    expect(wrapper.find(Question)).toExist();
  });

  test('question shows after questions loaded', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(
      wrapper
        .find(Question)
        .dive()
        .text()
    ).toMatch(/Hi \[voter name\]\. Let’s begin!/);
  });

  test('does not show loading after questions loaded', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(wrapper.text()).not.toMatch(/loading/);
  });

  test('shows loading before questions loaded', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.text()).toMatch(/loading/);
  });

  test('contains survey questions', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.questionParser.questions[0].id).toBe(
      '35767'
    );
  });

  test('can load data', async () => {
    expect.assertions(1);
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.data).not.toBeNull();
  });

  test('can mount', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.find('div')).toExist();
  });
});
