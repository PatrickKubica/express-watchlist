const express = require('express');

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
