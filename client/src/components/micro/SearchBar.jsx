function SearchBar() {
  return (
    <div className="search" style={{ textAlign: 'right' }}>
      <input type="text" id="search-input" label="Search" placeholder="Keresés..." />
    </div>
  );
}

export default SearchBar;
