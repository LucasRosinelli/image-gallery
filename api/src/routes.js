const express = require('express');

const routes = new express.Router();

routes.get('/', (request, response) => {
  return response.send('Image Gallery');
});

module.exports = routes;
