import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptions from '../QuestionOptions/QuestionOptions';

class Question extends React.Component {
  static propTypes = {
    question: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        questionText: PropTypes.string.isRequired,
        questionHelp: PropTypes.string.isRequired,
        questionOptions: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            optionText: PropTypes.string.isRequired,
            optionHelp: PropTypes.string.isRequired
          }).isRequired
        )
      })
    ]).isRequired
  };

  constructor(props) {
    super(props);
    const { question } = this.props;
    this.state = {
      question
    };
  }

  render() {
    const { question } = this.state;
    return (
      <div className="question">
        <h3>{question.questionText}</h3>
        <QuestionOptions questionOptions={question.questionOptions} />
      </div>
    );
  }
}

export default Question;
