import useMoviesStore from '../store/useMoviesStore';
import MovieCard from './MovieCard';

function MovieGrid() {
  const movies = useMoviesStore(state => state.movies);
  const loading = useMoviesStore(state => state.loading);
  const error = useMoviesStore(state => state.error);
  const getFilteredMovies = useMoviesStore(state => state.getFilteredMovies);

  if (loading) {
    return <div className="loading">🔍 Recherche en cours...</div>;
  }

  if (error) {
    return (
      <div className="no-results">
        <h2>❌ Erreur</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="no-results">
        <h2>🎬 Bienvenue !</h2>
        <p>Utilisez la barre de recherche pour trouver vos films préférés</p>
        <p style={{ fontSize: '14px', color: '#95a5a6', marginTop: '10px' }}>
          Essayez : Batman, Avatar, Matrix, Star Wars...
        </p>
      </div>
    );
  }

  const filteredMovies = getFilteredMovies();

  if (filteredMovies.length === 0) {
    return (
      <div className="no-results">
        <h2>😕 Aucun résultat</h2>
        <p>Aucun film ne correspond à ce filtre</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;