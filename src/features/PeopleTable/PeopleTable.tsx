import { useQuery } from '@tanstack/react-query';

import { Person } from '../../domain/model/apiServer.types';
import CustomTable from '../../shared/ui/CustomTable/CustomTable';
import PageSpinner from '../../shared/ui/PageSpinner/PageSpinner';
import { fetchAllPeople } from './model/fetchAllPeople';

function PeopleTable() {
  const { data: people, isLoading: isLoadingPeople } = useQuery<Person[]>({
    queryKey: ['people'],
    queryFn: fetchAllPeople,
    staleTime: 3600000,
  });
  return isLoadingPeople ? (
    <PageSpinner text="Loading table, it shouldn't take too long..." />
  ) : people ? (
    <CustomTable items={people} />
  ) : (
    <div style={{ margin: '0 auto' }}>No people to display</div>
  );
}

export default PeopleTable;
