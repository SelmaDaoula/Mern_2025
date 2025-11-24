import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import MovieGrid from './components/MovieGrid';
import FavoritesSidebar from './components/FavoritesSidebar';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="main-container">
        <div>
          <FilterBar />
          <MovieGrid />
        </div>
        <FavoritesSidebar />
      </div>
    </div>
  );
}

export default App;