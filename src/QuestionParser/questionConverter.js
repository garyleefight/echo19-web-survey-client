export default q => {
  const newQuestions = [];
  newQuestions.push({
    id: 'intro',
    questionText: q.intro,
    questionHelp: q.intro,
    questionOptions: [
      { id: 'intro-option', optionText: 'OK', optionHelp: 'OK', action: 'none' }
    ]
  });
  q.questions.forEach(item => {
    const newSurveyItem = {
      id: String(item.surveyQuestionId),
      intro: q.intro,
      goal: q.goal,
      endMessage: q.endMessage,
      questionText: item.nameLong,
      questionHelp: item.nameLong
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
  return newQuestions;
};
