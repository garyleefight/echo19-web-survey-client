import React from 'react';

import SurveyContainer from './components/SurveyContainer';
import questionFetcher from './questionFetcher/questionFetcher';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: false
    };
  }

  async componentDidMount() {
    try {
      const response = await questionFetcher();
      this.setState({
        survey: response
      });
    } catch (err) {
      console.log('err: ', err); // eslint-disable-line no-console
    }
  }

  render() {
    const { survey } = this.state;
    if (!survey) {
      return <div>loading...</div>;
    }
    return (
      <div className="App">
        <h1>echo19</h1>
        <SurveyContainer survey={survey} />
      </div>
    );
  }
}
