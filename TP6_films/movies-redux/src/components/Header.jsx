import { useSelector } from 'react-redux';
import { selectFavoritedIds } from '../store/moviesSlice';

function Header() {
  const favoritedIds = useSelector(selectFavoritedIds);

  return (
    <header className="header">
      <h1>🎬 Movie Gallery (Redux Toolkit)</h1>
      <div className="favorites-badge">
        ⭐ {favoritedIds.length} favoris
      </div>
    </header>
  );
}

export default Header;