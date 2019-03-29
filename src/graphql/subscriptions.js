// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateSurvey = `subscription OnCreateSurvey {
  onCreateSurvey {
    id
    name
    description
  }
}
`;
export const onUpdateSurvey = `subscription OnUpdateSurvey {
  onUpdateSurvey {
    id
    name
    description
  }
}
`;
export const onDeleteSurvey = `subscription OnDeleteSurvey {
  onDeleteSurvey {
    id
    name
    description
  }
}
`;
export const onCreateResponse = `subscription OnCreateResponse {
  onCreateResponse {
    id
    questionId
    key
    value
  }
}
`;
export const onUpdateResponse = `subscription OnUpdateResponse {
  onUpdateResponse {
    id
    questionId
    key
    value
  }
}
`;
export const onDeleteResponse = `subscription OnDeleteResponse {
  onDeleteResponse {
    id
    questionId
    key
    value
  }
}
`;
export const onCreateSurveyFromApi = `subscription OnCreateSurveyFromApi {
  onCreateSurveyFromApi {
    id
    url
  }
}
`;
export const onUpdateSurveyFromApi = `subscription OnUpdateSurveyFromApi {
  onUpdateSurveyFromApi {
    id
    url
  }
}
`;
export const onDeleteSurveyFromApi = `subscription OnDeleteSurveyFromApi {
  onDeleteSurveyFromApi {
    id
    url
  }
}
`;
