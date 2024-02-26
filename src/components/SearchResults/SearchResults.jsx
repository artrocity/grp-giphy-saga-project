import React from 'react';
import { useSelector } from 'react-redux';

function SearchResults() {
  const giphyResults = useSelector((state) => state.searchReducer.giphyResults);
  return (
    <>
      <h1>Here are your results</h1>
      {/* Map Out the Results */}
      {giphyResults.map((result, index) => (
        <div key={index}>
          <img src={result.url} alt={result.title} />
          <p>{result.title}</p>
        </div>
      ))}
    </>
  );
}

export default SearchResults;
