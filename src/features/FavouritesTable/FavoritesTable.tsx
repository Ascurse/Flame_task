import { useSelector } from 'react-redux';

import { RootState } from '../../domain/store/store';
import CustomTable from '../../shared/ui/CustomTable/CustomTable';

function FavoritesTable() {
  const favorites = useSelector((state: RootState) => state.favorites);
  return favorites ? (
    <CustomTable items={favorites} />
  ) : (
    <div style={{ margin: '0 auto' }}>No people to display</div>
  );
}

export default FavoritesTable;
