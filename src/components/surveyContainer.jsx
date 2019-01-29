import React from 'react';

import questionFetcher from '../questionFetcher/questionFetcher';
import QuestionParser from '../QuestionParser/QuestionParser';

export default class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      questionParser: null
    };
  }

  async componentDidMount() {
    try {
      const response = await questionFetcher();
      this.setState({
        data: response,
        questionParser: new QuestionParser(response)
      });
    } catch (err) {
      console.log('err: ', err); // eslint-disable-line no-console
    }
  }

  render() {
    const { data, questionParser } = this.state;
    if (!data) {
      return <div>loading...</div>;
    }
    return (
      <div>
        {/* <h1>survey container</h1> */}
        <h2>{questionParser.getFirstQuestion().questionText}</h2>
      </div>
    );
  }
}
