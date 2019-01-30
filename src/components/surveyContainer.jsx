import React from 'react';
import PropTypes from 'prop-types';

import QuestionParser from '../QuestionParser/QuestionParser';
import Question from './Question/Question';

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
      question: this.questionParser.getFirstQuestion()
    };
  }

  answerClicked = id => {
    this.setState({ question: this.questionParser.getNextQuestion(id) });
  };

  render() {
    const { question } = this.state;
    if (!question) {
      return <div>loading...</div>;
    }
    return (
      <div className="surveyContainer">
        <Question question={question} cf={this.answerClicked} />
      </div>
    );
  }
}
