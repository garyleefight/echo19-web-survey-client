import QuestionParser from './QuestionParser';

describe('question parser tests', () => {
  const qp = new QuestionParser();
  test('can be constructed', () => {
    expect(typeof qp).toBe('object');
  });
});
