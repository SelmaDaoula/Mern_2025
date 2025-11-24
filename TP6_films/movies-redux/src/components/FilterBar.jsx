import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectMovies, setFilter } from '../store/moviesSlice';

function FilterBar() {
  const filter = useSelector(selectFilter);
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  const filters = [
    { value: 'all', label: 'Tous', emoji: '🎬' },
    { value: 'movie', label: 'Films', emoji: '🎥' },
    { value: 'series', label: 'Séries', emoji: '📺' },
    { value: 'game', label: 'Jeux', emoji: '🎮' }
  ];

  // Ne pas afficher les filtres si aucun film n'est chargé
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          onClick={() => dispatch(setFilter(f.value))}
        >
          {f.emoji} {f.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;