import questionFetcher from './questionFetcher';

import survey from '../mock/questions.json';

const nock = require('nock');

function nockItOut() {
  nock(/.*/)
    .options('/graphql')
    .reply(200, '', [
      'Access-Control-Allow-Origin',
      '*',
      'Access-Control-Allow-Headers',
      'X-Api-Key'
    ]);

  nock(/.*/)
    .post('/graphql', {
      query: /.*query.*/,
      variables: { id: /.*/ }
    })
    .reply(200, {
      data: {
        getSurveyFromApi: {
          id: 'blah',
          url: 'http://someplace.com/apiV2/getScript',
          callId: '1'
        }
      }
    });
}

describe('questionFetcher tests', () => {
  beforeAll(() => {
    // nock.recorder.rec();
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.restore();
    nock.enableNetConnect();
  });

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(survey));
  });

  test('test fetcher can change based on querystring', async () => {
    nockItOut();
    window.history.pushState({}, '', '?callid=sample-id-like-this');
    await questionFetcher();
    expect(fetch.mock.calls[0][0]).toBe('http://someplace.com/apiV2/getScript');
    expect(fetch.mock.calls.length).toEqual(1);
    nock.restore();
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
