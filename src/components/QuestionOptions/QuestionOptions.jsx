import React from 'react';
import PropTypes from 'prop-types';

import QuestionOptionButton from '../QuestionOptionButton/QuestionOptionButton';

export default class QuestionOptions extends React.Component {
  static propTypes = {
    cf: PropTypes.func.isRequired,
    questionOptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        optionText: PropTypes.string.isRequired
      })
    ).isRequired
  };

  options = () => {
    const { questionOptions, cf } = this.props;
    return questionOptions.map(item => (
      <li key={item.id}>
        <QuestionOptionButton
          optionText={item.optionText}
          cf={cf}
          id={item.id}
        />
      </li>
    ));
  };

  render() {
    return (
      <div className="questionOptions">
        <ul>{this.options()}</ul>
      </div>
    );
  }
}
