const questionFetcher = async () => {
  try {
    const response = await fetch('http://localhost:3000/questions.json', {
      mode: 'cors'
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('ERROR: invalid server response');
  } catch (err) {
    throw new Error(err);
  }
};

export default questionFetcher;
