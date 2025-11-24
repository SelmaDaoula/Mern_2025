import { useMovies } from '../context/MoviesContext';

function Header() {
  const { favoritedIds } = useMovies();

  return (
    <header className="header">
      <h1>🎬 Movie Gallery (Context API)</h1>
      <div className="favorites-badge">
        ⭐ {favoritedIds.length} favoris
      </div>
    </header>
  );
}

export default Header;