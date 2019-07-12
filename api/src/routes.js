const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', PostController.getAll);
routes.get('/post/:id', PostController.getById);
routes.get('/post/byAuthor/:author', PostController.getByAuthor);
routes.post('/post', upload.single('imageUrl'), PostController.create);
routes.post('/post/:id/like', PostController.like);

module.exports = routes;
