const express = require('express');
const mongoose = require('mongoose');
// Make sure to add the configuration for your database to the config file
const databaseConfig = require('./config/database');

// Setup db connection
mongoose.connect(databaseConfig.database);
const database = mongoose.connection;

// Verify that db connection could be established
database.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to Database');
});
database.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});

const app = express();

// Specify Pug as template engine
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

// Add routes
const movies = require('./routes/movies');

app.use('/movies', movies);

app.listen(3000);
