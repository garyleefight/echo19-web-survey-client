import React from 'react';

import questionFetcher from '../questionFetcher/questionFetcher';
import QuestionParser from '../QuestionParser/QuestionParser';
import Question from './Question/Question';

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
      <div className="gothere">
        <Question
          question={questionParser.getFirstQuestion()}
          qp={questionParser}
        />
      </div>
    );
  }
}
