import { useMovies } from '../context/MoviesContext';

function FilterBar() {
  const { filter, setFilter, movies } = useMovies();

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
          onClick={() => setFilter(f.value)}
        >
          {f.emoji} {f.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;