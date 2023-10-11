import FavoritesTable from '../../features/FavouritesTable/FavoritesTable';
import PageHeader from '../../shared/ui/PageHeader/PageHeader';
import { PageLayout } from '../../shared/ui/PageLayout/PageLayout.styled';

function Favorites() {
  return (
    <>
      <PageHeader
        leftContentSlot={<a href="/">Back to home</a>}
        middleContentSlot={<h1>Favorites</h1>}
      />
      <PageLayout>
        <FavoritesTable />
      </PageLayout>
    </>
  );
}

export default Favorites;
