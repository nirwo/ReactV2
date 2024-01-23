import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchString, setSearchString] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchString);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchString} onChange={e => setSearchString(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
