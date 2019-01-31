import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptions from '../QuestionOptions/QuestionOptions';

const Question = props => {
  const { question, cf } = props;
  return (
    <div className="question">
      <h3>{question.questionText}</h3>
      <QuestionOptions questionOptions={question.questionOptions} cf={cf} />
    </div>
  );
};

Question.propTypes = {
  cf: PropTypes.func.isRequired,
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

export default Question;
