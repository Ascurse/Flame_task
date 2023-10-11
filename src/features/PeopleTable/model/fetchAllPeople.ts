import { Person } from '../../../domain/model/apiServer.types';

export async function fetchAllPeople(): Promise<Person[]> {
  try {
    let allPeople: Person[] = [];
    let nextPage = 'https://swapi.dev/api/people/';

    while (nextPage) {
      const response = await fetch(nextPage);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Add the current page's results to the aggregated data
      allPeople = allPeople.concat(data.results);

      // Update the next page URL
      nextPage = data.next;
    }

    return allPeople;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
