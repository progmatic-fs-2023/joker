import React from 'react';

function SearchBar() {
  return (
    <div className="search" style={{ textAlign: 'right' }}>
      <input type="text" id="search-input" label="Search" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
