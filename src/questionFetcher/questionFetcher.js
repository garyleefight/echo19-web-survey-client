import Amplify, { API, graphqlOperation } from 'aws-amplify';

import * as queries from '../graphql/queries';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const queryString = require('query-string');

// TODO: this is getting ugly, needs a refactor....
const questionFetcher = async (url = '/questions.json', params = {}) => {
  let combineParams = {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  };
  let newUrl = url;
  const qs = queryString.parse(window.location.search);

  if (qs.callid) {
    const resp = await API.graphql(
      graphqlOperation(queries.getSurveyFromApi, {
        id: '1dbe51af-5988-400e-87a9-3d5cdd253293'
      })
    );
    combineParams = Object.assign(combineParams, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callId: resp.data.getSurveyFromApi.callId })
    });
    newUrl = resp.data.getSurveyFromApi.url;
  }

  try {
    return new Promise(async (resolve, reject) => {
      const combinedParams = Object.assign(combineParams, params);
      const response = await fetch(newUrl, combinedParams);
      if (response.ok) {
        const json = await response.json();
        resolve(json);
      }
      const e = Error('invalid server response');
      reject(e);
    });
  } catch (err) {
    throw new Error();
  }
  // }
};

export default questionFetcher;
