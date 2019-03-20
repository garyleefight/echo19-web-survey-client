import questionConverter from './questionConverter';

export default class QuestionParser {
  constructor(data) {
    this.endMessage = data.endMessage;
    this.questions = questionConverter(data);
    this.getAnswerQuestions = this.getNextQuestion;
  }

  getEndMessage() {
    return this.endMessage;
  }

  getFirstQuestion() {
    return this.questions[0];
  }

  returnById(id) {
    const i = this.questions.findIndex((q, index) => {
      if (q.id === id) return index;
      return false;
    });
    if (i > 0) return this.questions[i];
    return false;
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
