import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionOptions extends React.Component {
  static propTypes = {
    cf: PropTypes.func.isRequired,
    optionText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    response: PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  };

  click = () => {
    const { cf, id, response } = this.props;
    cf(id, response);
  };

  render() {
    const { optionText } = this.props;
    return (
      <div>
        <button type="button" onClick={this.click}>
          {optionText}
        </button>
      </div>
    );
  }
}
// const QuestionOptionButton = params => {(

// )};

// export default QuestionOptionButton;
