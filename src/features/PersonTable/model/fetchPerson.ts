import { Person } from '../../../domain/model/apiServer.types';
import fetchWrapper from '../../../shared/api/fetchWrapper';

export async function fetchPerson(id: string): Promise<Person> {
  try {
    const response = await fetchWrapper(`people/${id}`);
    return response as Person;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
