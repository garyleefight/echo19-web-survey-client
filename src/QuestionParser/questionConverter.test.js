import questionConverter from './questionConverter';
import dbQuestions from '../mock/questions.json';

const q = questionConverter(dbQuestions);

describe('questionConverter tests', () => {
  test('there is a mock question with type "TEXT_ENTRY"', () => {
    expect(q[8].questionType).toBe('TEXT_ENTRY');
  });

  test('first question has default type of multiple choice', () => {
    expect(q[0].questionType).toBe('MULTIPLE_CHOICE');
  });

  test('question can have default type of multiple choice', () => {
    expect(q[1].questionType).toBe('MULTIPLE_CHOICE');
  });

  test('conversion has intro question', () => {
    expect(q[0].questionText).toBe(
      'Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?'
    );
  });

  test('ids are string values', () => {
    expect(typeof q[1].id).toBe('string');
    expect(typeof q[1].questionOptions[0].id).toBe('string');
  });

  test('test skip data gets entered into object', () => {
    expect(q[6].questionOptions[1].action).toBe('GOTO=8');
  });
});
