import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

describe('GraphQL tests', () => {
  test('should pass', async () => {
    const survey = await API.graphql(
      graphqlOperation(queries.getSurvey, { id: '1' })
    );
    expect(JSON.parse(survey.data.getSurvey.questions).endMessage).toMatch(
      /Thank you very much for your time!/
    );
  });
});
