const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', PostController.index);
routes.post('/post', upload.single('image'), PostController.create);

module.exports = routes;
