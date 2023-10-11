import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Person } from '../../domain/model/apiServer.types';
import CustomTable from '../../shared/ui/CustomTable/CustomTable';
import PageSpinner from '../../shared/ui/PageSpinner/PageSpinner';
import { fetchPerson } from './model/fetchPerson';

function PersonTable() {
  const { id } = useParams();
  const { data: person, isLoading: isLoadingPerson } = useQuery<Person>({
    queryKey: ['person', id],
    queryFn: () => fetchPerson(id ?? ''),
    staleTime: 3600000,
  });
  return isLoadingPerson ? (
    <PageSpinner text="Loading person, it shouldn't take too long..." />
  ) : person ? (
    <CustomTable items={[person]} />
  ) : (
    <div style={{ margin: '0 auto' }}>Person not found</div>
  );
}

export default PersonTable;
