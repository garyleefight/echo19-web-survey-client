import React from 'react';

import questionFetcher from '../questionFetcher/questionFetcher';

export default class SurveyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  async componentDidMount() {
    try {
      const response = await questionFetcher();
      this.setState({ questions: response });
    } catch (err) {
      console.log('err: ', err);
    }
  }

  render() {
    const { questions } = this.state;
    return <div>survey container {questions}</div>;
  }
}
