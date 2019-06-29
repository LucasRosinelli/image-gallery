const express = require('express');
const PostController = require('./controllers/PostController');

const routes = new express.Router();

routes.get('/post', PostController.index);
routes.post('/post', PostController.create);

module.exports = routes;
