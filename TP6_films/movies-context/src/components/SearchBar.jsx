import { useState } from 'react';
import { useMovies } from '../context/MoviesContext';

function SearchBar() {
  const { searchMovies, loading } = useMovies();
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      searchMovies(input);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher un film (ex: Batman, Avatar, Matrix)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />
      <button 
        className="search-btn" 
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Recherche...' : 'Rechercher'}
      </button>
    </div>
  );
}

export default SearchBar;