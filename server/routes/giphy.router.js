const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Set up an API KEY
const API_KEY = process.env.API_KEY;
console.log('API_KEY:', API_KEY);

// Establishing the BASE URL FOR API GIPHY
const BASE_URL_GIPHY = 'api.giphy.com/v1/gifs/search';

// Creating our POST ROUTE
router.post('/', (req, res) => {
  const { searchTerm } = req.body;
  // What to do???
  axios
    .get(
      `https://${BASE_URL_GIPHY}/?api_key=${API_KEY}&q=${searchTerm}&limit=10`
    )
    .then((giphyResponse) => {
      console.log('SUCCESS', giphyResponse.data);
      const simpleResults = giphyResponse.data.data.map((imageData) => {
        return {
          id: imageData.id,
          url: imageData.images.original.url,
          alt: imageData.title,
        };
      });
      res.send(simpleResults);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      res.sendStatus(500);
    });
});

// Export the router
module.exports = router;
