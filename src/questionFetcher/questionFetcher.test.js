import questionFetcher from './questionFetcher';

import survey from '../mock/questions.json';

describe('questionFetcher tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });

  test('test that I can set the url for the window', () => {
    // i believe (not proven) that creat-react-app sets location to http://localhost/
    // for some reason, i can't change it in the exports testURL: 'http://coolsitebro.com'
    // somewhat confirmed here:
    // https://github.com/facebook/create-react-app/blob/3be35763044c690458e806c255e100336de0d9a1/packages/react-scripts/scripts/utils/createJestConfig.js
    window.history.pushState({}, 'Test Title', '?q=true');
    expect(window.location.href).toBe('http://localhost/?q=true');
    expect(window.location.search).toBe('?q=true');
  });

  test('can set headers and body', () => {
    const json = JSON.stringify({ callId: '24167' });
    questionFetcher('http://yeahoo.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: json
    });
    expect(fetch.mock.calls[0][1].body).toBe(json);
    expect(fetch.mock.calls[0][1].headers).toMatchObject({
      'Content-Type': 'application/json'
    });
  });

  test('can use post to get data', () => {
    questionFetcher('http://yahoo.com', { method: 'POST' });
    expect(fetch.mock.calls[0][1].method).toBe('POST');
  });

  test('pass url to fetcher', () => {
    questionFetcher('http://yahoo.com');
    expect(fetch.mock.calls[0][0]).toEqual('http://yahoo.com');
  });

  test('can test for expect error to be thrown', () => {
    expect(() => {
      throw new Error('HELP');
    }).toThrowError(Error);
  });

  test('questionFetch can fail', async () => {
    fetch.resetMocks();
    fetch.mockResponse('blah', { status: 404 });
    expect.assertions(1);
    await expect(questionFetcher()).rejects.toEqual(
      Error('invalid server response')
    );
  });

  test('questionFetcher returns data', async () => {
    const f = await questionFetcher();
    expect(f.questions[0].surveyQuestionId).toBe(35767);
  });

  test('sanity test', () => {
    expect(true).toBeTruthy();
  });
});
