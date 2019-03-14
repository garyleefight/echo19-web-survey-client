export default q => {
  const newQuestions = [];
  newQuestions.push({
    id: 'intro',
    questionText: q.intro,
    questionHelp: q.intro,
    questionType: 'MULTIPLE_CHOICE',
    questionOptions: [
      {
        id: 'intro-option',
        optionText: 'OK',
        optionHelp: 'OK',
        action: 'none'
      }
    ]
  });
  q.questions.forEach(item => {
    const newSurveyItem = {
      id: String(item.surveyQuestionId),
      questionText: item.nameLong,
      questionHelp: item.nameLong,
      questionType: item.questionType || 'MULTIPLE_CHOICE'
    };
    // if / else statement to handle questions without any answers - i.e. statements
    if (item.answers) {
      newSurveyItem.questionOptions = [];
      item.answers.forEach(answer => {
        newSurveyItem.questionOptions.push({
          id: String(answer.surveyQuestionAnswerId),
          optionText: answer.value,
          optionHelp: answer.value,
          action: answer.action
        });
      });
    } else {
      newSurveyItem.questionOptions = [
        {
          id: `${item.surveyQuestionId}-1`,
          optionText: 'OK',
          optionHelp: 'OK',
          action: 'none'
        }
      ];
    }
    newQuestions.push(newSurveyItem);
  });
  // CAUTION: pretty hacky...
  // replace array position with id...
  newQuestions.forEach(item => {
    item.questionOptions.forEach(itemOption => {
      const f = /GOTO=(.*?)/.exec(itemOption.action);
      if (f) {
        console.log(itemOption.action, f[1]);
      }
    });
  });
  return newQuestions;
};
