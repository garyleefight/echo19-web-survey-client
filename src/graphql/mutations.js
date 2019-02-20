// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSurvey = `mutation CreateSurvey($input: CreateSurveyInput!) {
  createSurvey(input: $input) {
    id
    name
    questions
  }
}
`;
export const updateSurvey = `mutation UpdateSurvey($input: UpdateSurveyInput!) {
  updateSurvey(input: $input) {
    id
    name
    questions
  }
}
`;
export const deleteSurvey = `mutation DeleteSurvey($input: DeleteSurveyInput!) {
  deleteSurvey(input: $input) {
    id
    name
    questions
  }
}
`;
export const createResponse = `mutation CreateResponse($input: CreateResponseInput!) {
  createResponse(input: $input) {
    id
    questionId
    key
    value
  }
}
`;
export const updateResponse = `mutation UpdateResponse($input: UpdateResponseInput!) {
  updateResponse(input: $input) {
    id
    questionId
    key
    value
  }
}
`;
export const deleteResponse = `mutation DeleteResponse($input: DeleteResponseInput!) {
  deleteResponse(input: $input) {
    id
    questionId
    key
    value
  }
}
`;
