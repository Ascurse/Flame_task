import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from '../../features/PeopleTable/store/favoritesSlice';
import { Person } from '../model/apiServer.types';

export interface RootState {
  favorites: Person[];
}

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
