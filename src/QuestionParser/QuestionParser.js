import questionConverter from './questionConverter';

export default class QuestionParser {
  constructor(data) {
    this.questions = questionConverter(data.questions);
    this.getAnswerQuestions = this.getNextQuestion;
  }

  getFirstQuestion() {
    return this.questions[0];
  }

  getNextQuestion = id => {
    let gotoQuestion = -1;
    const found = this.questions.findIndex((question, index) => {
      const optionIndex = question.questionOptions.findIndex(
        option => option.id === id
      );
      const option = this.questions[index].questionOptions[optionIndex];
      if (option) {
        if (option.action) {
          if (option.action === 'BYE') {
            return false;
          }
          if (option.action.split('=')[1]) {
            [, gotoQuestion] = option.action.split('=');
          }
        }
      }
      return optionIndex >= 0 && this.questions[index + 1];
    });
    if (gotoQuestion >= 0) {
      return this.questions[gotoQuestion - 1];
    }
    return found >= 0 ? this.questions[found + 1] : false;
  };
}
