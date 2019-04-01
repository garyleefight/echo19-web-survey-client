export default q => {
  const newQuestions = [];
  try {
    newQuestions.push({
      id: 'intro',
      questionText: q.data.name,
      questionHelp: q.data.name,
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
    q.data.surveyQuestions.forEach(item => {
      const newSurveyItem = {
        id: String(item.id),
        questionText: item.name,
        questionHelp: item.name,
        questionType: item.questionType || 'MULTIPLE_CHOICE'
      };
      // if / else statement to handle questions without any answers - i.e. statements
      if (item.actions) {
        newSurveyItem.questionOptions = [];
        item.actions.forEach(answer => {
          newSurveyItem.questionOptions.push({
            id: String(answer.id),
            optionText: answer.value,
            optionHelp: answer.value,
            action: answer.answerAction
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
  } catch (err1) {
    try {
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
      return newQuestions;
    } catch (err) {
      throw new Error('parsing error');
    }
  }
};

const q2 = () => {};

export { q2 };
