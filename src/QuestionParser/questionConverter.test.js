import questionConverter from './questionConverter';
import dbQuestions from '../mock/questions.json';

const q = questionConverter(dbQuestions.questions);

describe('questionConverter tests', () => {
  test('ids are string values', () => {
    expect(typeof q[1].id).toBe('string');
    expect(typeof q[1].questionOptions[1].id).toBe('string');
  });
  test('test skip data gets entered into object', () => {
    expect(q[5].questionOptions[1].action).toBe('GOTO=7');
  });
});
