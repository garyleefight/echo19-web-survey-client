import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SurveyContainer from './components/SurveyContainer';
import survey from './mock/questions.json';

// this is here to wait for an async call - making sure that the prior one finishes...
const waitForAsync = () => new Promise(resolve => setImmediate(resolve));

describe('App tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });
  test('does not show loading after questions loaded', async () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    await waitForAsync(); // see comment above...
    expect(wrapper.text()).not.toMatch(/loading/);
  });

  test('shows loading before questions loaded', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toMatch(/loading/);
  });

  test('can load survey', async () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    await waitForAsync(); // see comment above...
    expect(wrapper.instance().state.survey).not.toBeNull();
  });

  it('has a survey container', async () => {
    const wrapper = shallow(<App />);
    await waitForAsync(); // see comment above...
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
