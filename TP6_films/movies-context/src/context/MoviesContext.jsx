import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within MoviesProvider');
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favoritedIds, setFavoritedIds] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // ⚠️ Remplacez par votre clé API OMDb
  const API_KEY = 'VOTRE_CLE_API';

  // Fonction pour rechercher des films
  const searchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        console.log('Aucun film trouvé');
      }
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Toggle favori
  const toggleFavorite = (id) => {
    setFavoritedIds(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Obtenir les films favoris
  const getFavoritedMovies = () => {
    return movies.filter(movie => favoritedIds.includes(movie.imdbID));
  };

  // Obtenir les films filtrés
  const getFilteredMovies = () => {
    if (filter === 'all') return movies;
    return movies.filter(movie => movie.Type.toLowerCase() === filter);
  };

  const value = {
    movies,
    favoritedIds,
    filter,
    loading,
    searchMovies,
    toggleFavorite,
    setFilter,
    getFavoritedMovies,
    getFilteredMovies
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};