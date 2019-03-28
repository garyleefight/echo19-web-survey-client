const questionFetcher = (url = '/questions.json', params = {}) =>
  new Promise(async (resolve, reject) => {
    const combinedParams = Object.assign({ mode: 'cors' }, params);
    const response = await fetch(url, combinedParams);
    if (response.ok) {
      const json = await response.json();
      resolve(json);
    }
    const e = Error('invalid server response');
    reject(e);
  });

export default questionFetcher;
