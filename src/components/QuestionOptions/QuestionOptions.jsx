import React from 'react';
import PropTypes from 'prop-types';

class QuestionOptions extends React.Component {
  static propTypes = {
    questionOptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        optionText: PropTypes.string.isRequired
      })
    ).isRequired
  };

  options = options =>
    options.map(item => <li key={item.id}>{item.optionText}</li>);

  render() {
    const { questionOptions } = this.props;
    return (
      <div className="questionOptions">
        <ul>{this.options(questionOptions)}</ul>
      </div>
    );
  }
}

export default QuestionOptions;
