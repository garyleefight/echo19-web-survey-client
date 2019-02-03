// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSurvey = `query GetSurvey($id: ID!) {
  getSurvey(id: $id) {
    id
    name
    questions
  }
}
`;
export const listSurveys = `query ListSurveys(
  $filter: ModelSurveyFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      questions
    }
    nextToken
  }
}
`;
