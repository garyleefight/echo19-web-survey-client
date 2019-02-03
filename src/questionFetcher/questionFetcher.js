const questionFetcher = (url = '/questions.json') =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(url, {
      mode: 'cors'
    });
    if (response.ok) {
      const json = await response.json();
      resolve(json);
    }
    const e = Error('invalid server response');
    reject(e);
  });

export default questionFetcher;
