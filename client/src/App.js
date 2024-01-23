import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PivotTable from './components/PivotTable';

function App() {
  const [data, setData] = useState([]);

  const handleSearch = (searchString) => {
    fetch(`/api/search?q=${searchString}`)
      .then(response => response.json())
      .then(data => setData(data));
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <PivotTable data={data} />
    </div>
  );
}

export default App;
