import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionOptions extends React.Component {
  static propTypes = {
    cf: PropTypes.func.isRequired,
    optionText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
    response: PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  };

  click = () => {
    const { cf, id, response, questionId } = this.props;
    cf(id, response, questionId);
  };

  render() {
    const { optionText } = this.props;
    return (
      <div>
        <button
          className="list-group-item list-group-item-action"
          type="button"
          onClick={this.click}
        >
          {optionText}
        </button>
      </div>
    );
  }
}
// const QuestionOptionButton = params => {(

// )};

// export default QuestionOptionButton;
