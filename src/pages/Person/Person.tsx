import PersonTable from '../../features/PersonTable/PersonTable';
import PageHeader from '../../shared/ui/PageHeader/PageHeader';
import { PageLayout } from '../../shared/ui/PageLayout/PageLayout.styled';

function Person() {
  return (
    <>
      <PageHeader
        leftContentSlot={<a href="/">Back to home</a>}
        middleContentSlot={<h1>Person</h1>}
      />
      <PageLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        ></div>
        <PersonTable />
      </PageLayout>
    </>
  );
}
export default Person;
