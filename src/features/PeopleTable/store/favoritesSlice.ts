import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../../../domain/model/apiServer.types';

const initialState: Person[] = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites')!)
  : [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Person>) => {
      const existingPerson = state.find((person) => person.name === action.payload.name);
      if (!existingPerson) {
        const newState = [...state, action.payload];
        localStorage.setItem('favorites', JSON.stringify(newState));
        return newState;
      }
      return state;
    },
    removeFromFavorites: (state, action: PayloadAction<Person>) => {
      const newState = state.filter((person) => person.name !== action.payload.name);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
