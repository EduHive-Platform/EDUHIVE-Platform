import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilter = () => {
    onFilter();
  };

  return (
    <div className="search-box">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        {<span className="clear-icon" onClick={handleClear}>×</span>}
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
      <button className="filter-button" onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default SearchBox;
