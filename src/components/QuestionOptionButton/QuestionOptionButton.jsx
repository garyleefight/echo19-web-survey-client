import React from 'react';

const QuestionOptionButton = params => (
  <div>
    <button type="button" onClick={params.clickFunction}>
      {params.optionText}
    </button>
  </div>
);

export default QuestionOptionButton;
