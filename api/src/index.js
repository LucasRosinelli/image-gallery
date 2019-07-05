const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('YOUR_MONGODB_CONNECTION_HERE', {
  useNewUrlParser: true,
});

app.use((request, response, next) => {
  request.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads',
    'resized')));

app.use(require('./routes'));

server.listen(3333);
