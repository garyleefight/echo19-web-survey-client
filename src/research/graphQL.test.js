import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

describe('GraphQL tests', () => {
  test.skip('should pass', async () => {
    const survey = await API.graphql(
      graphqlOperation(queries.getSurvey, { id: '1' })
    );
    expect(JSON.parse(survey.data.getSurvey.questions).endMessage).toMatch(
      /Thank you very much for your time!/
    );
  });

  test.skip('can add a response', async () => {
    const now = Date.now();
    const resp = await API.graphql(
      graphqlOperation(mutations.createResponse, {
        input: {
          id: now,
          key: 'key',
          value: 'value'
        }
      })
    );
    expect(parseInt(resp.data.createResponse.id, 10)).toBe(now);
  });
});
