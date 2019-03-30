import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

describe('GraphQL tests', () => {
  test('sanity', () => {
    expect(true).toBe(true);
  });

  test('can get survey url from graphql api', async () => {
    const resp = await API.graphql(
      graphqlOperation(queries.getSurveyFromApi, {
        id: '1dbe51af-5988-400e-87a9-3d5cdd253293'
      })
    );
    expect(JSON.parse(resp.data.getSurveyFromApi.callId)).toBe(24167);
  });

  test.skip('can add surveyFromApi', async () => {
    const resp = await API.graphql(
      graphqlOperation(mutations.createSurveyFromApi, {
        input: {
          url: 'http://somewhere.com/apiV2/getScript',
          callId: '24167'
        }
      })
    );
    expect(resp.data.createSurveyFromApi.callId).toBe('24167');
  });

  test.skip('should pass', async done => {
    const survey = await API.graphql(
      graphqlOperation(queries.getSurvey, { id: '1' })
    );
    expect(JSON.parse(survey.data.getSurvey.questions).endMessage).toMatch(
      /Thank you very much for your time!/
    );
    done();
  });

  test.skip('can add a response', async done => {
    const now = Date.now();
    const resp = await API.graphql(
      graphqlOperation(mutations.createResponse, {
        input: {
          questionId: now,
          key: 'key',
          value: 'value'
        }
      })
    );
    expect(parseInt(resp.data.createResponse.questionId, 10)).toBe(now);
    done();
  });
});
