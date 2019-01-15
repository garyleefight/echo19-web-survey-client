import React from 'react';
import SurveyContainer from './SurveyContainer';

describe('survey container tests', () => {
  test('test can mount', () => {
    const wrapper = shallow(<SurveyContainer />);
    expect(wrapper.find('div')).toExist();
  });
});
