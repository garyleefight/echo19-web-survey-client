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
      this.setState({ data: response });
      this.setState({ questionParser: new QuestionParser(response) });
    } catch (err) {
      console.log('err: ', err); // eslint-disable-line no-console
    }
  }

  render() {
    const { data, questionParser } = this.state;
    return (
      <div>
        survey container {data}
        <br />
        {questionParser.questions}
      </div>
    );
  }
}
