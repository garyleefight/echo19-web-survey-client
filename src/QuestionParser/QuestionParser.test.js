import QuestionParser from './QuestionParser';
import survey from '../mock/questions.json';

describe('question parser tests', () => {
  const qp = new QuestionParser(survey);

  test('can get end message', () => {
    expect(qp.getEndMessage()).toMatch(
      /This call was paid for by Chocolate Cows/
    );
  });

  test('some questions contain bye', () => {
    expect(qp.questions[2].questionOptions[1].action).toBe('BYE');
  });

  test('can get first question', () => {
    expect(qp.getFirstQuestion().questionText).toMatch(
      /Hello! This is \[volunteer name\]/
    );
  });

  test('will return false if the next question does not exist', () => {
    expect(qp.getNextQuestion('35774-1')).toBe(false);
  });

  test('can get the next question after a click if the answer has additional questions', () => {
    expect(qp.getNextQuestion('159362').id).toBe('357739');
  });

  test('has data', () => {
    expect(qp.questions.length).toBeGreaterThan(1);
  });

  test('skips if a goto is the action', () => {
    expect(qp.getNextQuestion('159360').id).toBe('35774');
    expect(qp.getNextQuestion('159364').id).toBe('35774');
  });

  test('returns next question with faked id', () => {
    expect(qp.getNextQuestion('35767-1').id).toBe('35768');
  });

  test('returns false if no next question', () => {
    expect(qp.getNextQuestion('35774-1')).toBe(false);
  });

  test('can get next question', () => {
    expect(qp.getNextQuestion('159348').id).toBe('35769');
  });

  test('question parser can convert db questions to js questions', () => {
    expect(qp.questions[1].id).toBe('35767');
  });

  test('question parser gets questions', () => {
    expect(qp.questions[0].id).toBe('intro');
  });

  test('can load questions from file', () => {
    expect(survey.questions[0].surveyQuestionId).toBe(35767);
  });

  test('can be constructed', () => {
    expect(typeof qp).toBe('object');
  });
});
