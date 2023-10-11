import PeopleTable from '../../features/PeopleTable/PeopleTable';
import SearchPerson from '../../features/SearchPerson/SearchPerson';
import PageHeader from '../../shared/ui/PageHeader/PageHeader';
import { PageLayout } from '../../shared/ui/PageLayout/PageLayout.styled';

function People() {
  return (
    <>
      <PageHeader
        leftContentSlot={<a href="/">Back to home</a>}
        middleContentSlot={<h1>People</h1>}
      />
      <PageLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <SearchPerson placeholder="Search person..." style={{ width: '200px' }} />
        </div>
        <PeopleTable />
      </PageLayout>
    </>
  );
}
export default People;
