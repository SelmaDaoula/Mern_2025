import { create } from 'zustand';

// ⚠️ Remplacez par votre clé API OMDb
const API_KEY = '3a7ab7fb-d04d-4701-8566-3042e7a6db5a';

const useMoviesStore = create((set, get) => ({
  // State
  movies: [],
  favoritedIds: [],
  filter: 'all',
  loading: false,
  error: null,

  // Action : Rechercher des films
  searchMovies: async (searchTerm) => {
    if (!searchTerm.trim()) return;

    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        set({ 
          movies: data.Search, 
          loading: false,
          error: null 
        });
      } else {
        set({ 
          movies: [], 
          loading: false,
          error: 'Aucun film trouvé' 
        });
      }
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      set({ 
        movies: [], 
        loading: false,
        error: 'Erreur lors de la recherche' 
      });
    }
  },

  // Action : Toggle favori
  toggleFavorite: (id) => set((state) => ({
    favoritedIds: state.favoritedIds.includes(id)
      ? state.favoritedIds.filter(favId => favId !== id)
      : [...state.favoritedIds, id]
  })),

  // Action : Changer le filtre
  setFilter: (filter) => set({ filter }),

  // Action : Réinitialiser l'erreur
  clearError: () => set({ error: null }),

  // Selector : Obtenir les films favoris
  getFavoritedMovies: () => {
    const { movies, favoritedIds } = get();
    return movies.filter(movie => favoritedIds.includes(movie.imdbID));
  },

  // Selector : Obtenir les films filtrés
  getFilteredMovies: () => {
    const { movies, filter } = get();
    if (filter === 'all') return movies;
    return movies.filter(movie => movie.Type.toLowerCase() === filter);
  }
}));

export default useMoviesStore;