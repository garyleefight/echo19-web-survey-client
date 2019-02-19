import React from 'react';
import PropTypes from 'prop-types';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import QuestionParser from '../QuestionParser/QuestionParser';
import Question from './Question/Question';

import * as mutations from '../graphql/mutations';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default class SurveyContainer extends React.Component {
  static propTypes = {
    survey: PropTypes.shape({
      question: PropTypes.array
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.questionParser = new QuestionParser(props.survey);
    this.state = {
      question: this.questionParser.getFirstQuestion(),
      complete: false,
      endMessage: this.questionParser.getEndMessage()
    };
  }

  answerClicked = async (id, r = { key: null, value: null }) => {
    if (r.key) {
      await API.graphql(
        graphqlOperation(mutations.createResponse, {
          input: {
            id,
            key: r.key,
            value: r.value
          }
        })
      );
    }
    const q = this.questionParser.getNextQuestion(id);
    if (q) {
      this.setState({ question: q });
    } else {
      this.setState({ complete: true });
    }
  };

  render() {
    const { question, complete, endMessage } = this.state;
    if (!question) {
      return <div>loading...</div>;
    }
    if (complete) {
      return <div>{endMessage}</div>;
    }
    return (
      <div className="surveyContainer">
        <Question question={question} cf={this.answerClicked} />
      </div>
    );
  }
}
