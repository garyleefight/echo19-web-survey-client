// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSurvey = `query GetSurvey($id: ID!) {
  getSurvey(id: $id) {
    id
    name
    description
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
      description
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
export const getSurveyFromApi = `query GetSurveyFromApi($id: ID!) {
  getSurveyFromApi(id: $id) {
    id
    url
    callId
  }
}
`;
export const listSurveyFromApis = `query ListSurveyFromApis(
  $filter: ModelSurveyFromApiFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveyFromApis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      callId
    }
    nextToken
  }
}
`;
