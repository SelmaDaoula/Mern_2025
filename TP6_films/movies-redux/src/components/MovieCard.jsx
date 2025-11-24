import { useSelector, useDispatch } from 'react-redux';
import { selectFavoritedIds, toggleFavorite } from '../store/moviesSlice';

function MovieCard({ movie }) {
  const favoritedIds = useSelector(selectFavoritedIds);
  const dispatch = useDispatch();
  const isFavorited = favoritedIds.includes(movie.imdbID);

  // Image par défaut si pas de poster
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/200x300/2a2a2a/ffffff?text=No+Poster';

  return (
    <div className="movie-card">
      <button
        className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
        onClick={() => dispatch(toggleFavorite(movie.imdbID))}
        aria-label={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        {isFavorited ? '⭐' : '☆'}
      </button>

      <img 
        src={posterUrl} 
        alt={movie.Title}
        loading="lazy"
      />

      <div className="movie-info">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-year">{movie.Year}</div>
        <div className="movie-type">
          {movie.Type === 'movie' && '🎥 Film'}
          {movie.Type === 'series' && '📺 Série'}
          {movie.Type === 'game' && '🎮 Jeu'}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;