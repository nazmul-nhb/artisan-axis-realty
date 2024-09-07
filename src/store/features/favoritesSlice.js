import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('estates')) || [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const estateId = action.payload;
            if (!state.favorites.includes(estateId)) {
                state.favorites.push(estateId);
                localStorage.setItem('estates', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action) => {
            const estateId = action.payload;
            state.favorites = state.favorites.filter((id) => id !== estateId);
            localStorage.setItem('estates', JSON.stringify(state.favorites));
        },
        loadFavoritesFromLocalStorage: (state) => {
            state.favorites = JSON.parse(localStorage.getItem('estates')) || [];
        },
    },
});

export const { addFavorite, removeFavorite, loadFavoritesFromLocalStorage } = favoritesSlice.actions;
export default favoritesSlice.reducer;
