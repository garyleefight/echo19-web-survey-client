// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSurvey = `mutation CreateSurvey($input: CreateSurveyInput!) {
  createSurvey(input: $input) {
    id
    name
    description
  }
}
`;
export const updateSurvey = `mutation UpdateSurvey($input: UpdateSurveyInput!) {
  updateSurvey(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteSurvey = `mutation DeleteSurvey($input: DeleteSurveyInput!) {
  deleteSurvey(input: $input) {
    id
    name
    description
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
export const createSurveyFromApi = `mutation CreateSurveyFromApi($input: CreateSurveyFromApiInput!) {
  createSurveyFromApi(input: $input) {
    id
    url
  }
}
`;
export const updateSurveyFromApi = `mutation UpdateSurveyFromApi($input: UpdateSurveyFromApiInput!) {
  updateSurveyFromApi(input: $input) {
    id
    url
  }
}
`;
export const deleteSurveyFromApi = `mutation DeleteSurveyFromApi($input: DeleteSurveyFromApiInput!) {
  deleteSurveyFromApi(input: $input) {
    id
    url
  }
}
`;
