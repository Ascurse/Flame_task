import { Person } from '../../../domain/model/apiServer.types';

export async function fetchSearchPerson(value: string): Promise<Person[]> {
  try {
    const link = `https://swapi.dev/api/people/?search=${value}`;
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
