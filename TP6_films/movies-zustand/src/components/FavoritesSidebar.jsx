import useMoviesStore from '../store/useMoviesStore';

function FavoritesSidebar() {
  const getFavoritedMovies = useMoviesStore(state => state.getFavoritedMovies);
  const toggleFavorite = useMoviesStore(state => state.toggleFavorite);
  const favoritedMovies = getFavoritedMovies();

  return (
    <div className="favorites-sidebar">
      <h2>⭐ Mes Favoris ({favoritedMovies.length})</h2>

      {favoritedMovies.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: '#95a5a6', marginBottom: '10px' }}>
            Aucun favori pour le moment
          </p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Cliquez sur ⭐ pour ajouter des films à vos favoris
          </p>
        </div>
      ) : (
        favoritedMovies.map(movie => (
          <div key={movie.imdbID} className="favorite-item">
            <img 
              src={movie.Poster !== 'N/A' 
                ? movie.Poster 
                : 'https://via.placeholder.com/50x75/2a2a2a/ffffff?text=No+Image'
              } 
              alt={movie.Title}
              loading="lazy"
            />
            <div className="favorite-item-info">
              <div className="favorite-item-title">{movie.Title}</div>
              <div className="favorite-item-year">{movie.Year}</div>
            </div>
            <button
              className="remove-btn"
              onClick={() => toggleFavorite(movie.imdbID)}
              aria-label="Retirer des favoris"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesSidebar;