import useMoviesStore from '../store/useMoviesStore';

function Header() {
  const favoritedIds = useMoviesStore(state => state.favoritedIds);

  return (
    <header className="header">
      <h1>🎬 Movie Gallery (Zustand)</h1>
      <div className="favorites-badge">
        ⭐ {favoritedIds.length} favoris
      </div>
    </header>
  );
}

export default Header;