const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('YOUR_MONGODB_CONNECTION_HERE', {
  useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
