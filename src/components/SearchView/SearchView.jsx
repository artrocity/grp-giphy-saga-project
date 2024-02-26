import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestGiphySearch } from '../Actions/Actions';
import './SearchView.css';

function SearchView() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault;
    dispatch(requestGiphySearch(searchTerm));
  };

  return (
    <>
      <h1 className="search-header">GIPHY SEARCH</h1>
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchView;
