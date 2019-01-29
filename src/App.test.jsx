import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SurveyContainer from './components/SurveyContainer';

describe('App tests', () => {
  it('has a survey container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SurveyContainer)).toExist();
  });

  it('can use enzyme to test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find('blink')).not.toExist();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
