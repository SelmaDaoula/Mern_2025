import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ⚠️ Remplacez par votre clé API OMDb
const API_KEY = 'VOTRE_CLE_API';

// Thunk pour rechercher les films
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        return data.Search;
      } else {
        return rejectWithValue('Aucun film trouvé');
      }
    } catch (error) {
      return rejectWithValue('Erreur lors de la recherche');
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favoritedIds: [],
    filter: 'all',
    loading: false,
    error: null
  },
  reducers: {
    // Toggle favori
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favoritedIds.includes(id)) {
        state.favoritedIds = state.favoritedIds.filter(favId => favId !== id);
      } else {
        state.favoritedIds.push(id);
      }
    },
    // Changer le filtre
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    // Réinitialiser l'erreur
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Pending : recherche en cours
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Fulfilled : recherche réussie
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
        state.error = null;
      })
      // Rejected : erreur de recherche
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.movies = [];
      });
  }
});

// Export des actions
export const { toggleFavorite, setFilter, clearError } = moviesSlice.actions;

// Selectors
export const selectMovies = (state) => state.movies.movies;
export const selectFavoritedIds = (state) => state.movies.favoritedIds;
export const selectFilter = (state) => state.movies.filter;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

// Selector pour les films favoris
export const selectFavoritedMovies = (state) => {
  return state.movies.movies.filter(movie =>
    state.movies.favoritedIds.includes(movie.imdbID)
  );
};

// Selector pour les films filtrés
export const selectFilteredMovies = (state) => {
  const { movies, filter } = state.movies;
  if (filter === 'all') return movies;
  return movies.filter(movie => movie.Type.toLowerCase() === filter);
};

export default moviesSlice.reducer;