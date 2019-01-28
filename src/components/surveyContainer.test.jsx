import React from 'react';
import SurveyContainer from './SurveyContainer';

import survey from '../mock/questions.json';

// this is here to wait for an async call - making sure that the prior one finishes...
const waitForAsync = () => new Promise(resolve => setImmediate(resolve));

describe('survey container tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });

  test('can load data', async () => {
    const wrapper = shallow(<SurveyContainer />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.questions).not.toBeNull();
  });

  test('can mount', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.find('div')).toExist();
  });
});
