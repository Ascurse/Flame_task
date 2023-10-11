const BASE_URL = 'https://swapi.dev/api';

async function fetchWrapper(endpoint: string, options = {}) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default fetchWrapper;
