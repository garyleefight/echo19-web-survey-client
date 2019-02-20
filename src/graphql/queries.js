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
export const getResponse = `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    questionId
    key
    value
  }
}
`;
export const listResponses = `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      questionId
      key
      value
    }
    nextToken
  }
}
`;
