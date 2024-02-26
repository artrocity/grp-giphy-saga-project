import React from 'react';
import { useSelector } from 'react-redux';

import './SearchResults.css';

function SearchResults() {
  const giphyResults = useSelector((state) => state.searchReducer.giphyResults);
  return (
    <>
      <h1 className="result-header">Here are your results</h1>
      {/* Map Out the Results */}
      <div className="results-container">
        {giphyResults.map((result, index) => (
          <div key={index} className="result-item">
            <img src={result.url} alt={result.title} />
            <p>{result.title}</p>
            <button>Save as Favorite</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
