import React from 'react';
import './SearchView.css';

function SearchView() {
  return (
    <>
      <h1 className="search-header">GIPHY SEARCH</h1>
      <div className="main-container">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <button className="search-button">Search</button>
      </div>
    </>
  );
}

export default SearchView;
