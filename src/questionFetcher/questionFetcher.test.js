import questionFetcher from './questionFetcher';

import survey from '../mock/questions.json';

describe('questionFetcher tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });

  test('can expetc error to be thrown', () => {
    expect(() => {
      throw new TypeError('HELP');
    }).toThrowError(TypeError);
  });

  // test('questionFetch can fail', async () => {
  //   fetch.resetMocks();
  //   fetch.mockResponse('blah', { status: 404 });
  //   expect(async () => {
  //     await questionFetcher();
  //   }).toThrowError(TypeError);
  // });

  test('questionFetcher returns data', async () => {
    const f = await questionFetcher();
    expect(f.questions[0].surveyQuestionId).toBe(35767);
  });

  test('sanity test', () => {
    expect(true).toBeTruthy();
  });
});
