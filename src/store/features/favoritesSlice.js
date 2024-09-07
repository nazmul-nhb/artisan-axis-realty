import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
                toast.success(`Added to Favorites`, { autoClose: 3000, });
            } else {
                toast.warn(`Already Exists in Favorites`, { autoClose: 3000 })
            }
        },
        removeFavorite: (state, action) => {
            const estateId = action.payload;
            state.favorites = state.favorites.filter((id) => id !== estateId);
            localStorage.setItem('estates', JSON.stringify(state.favorites));
            toast.info(`Removed form Favorites`, { theme: "colored", autoClose: 3000 });
        },
        loadFavoritesFromLocalStorage: (state) => {
            state.favorites = JSON.parse(localStorage.getItem('estates')) || [];
        },
    },
});

export const { addFavorite, removeFavorite, loadFavoritesFromLocalStorage } = favoritesSlice.actions;
export default favoritesSlice.reducer;
