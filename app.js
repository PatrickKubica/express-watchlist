const express = require('express');

const app = express();

// Specify Pug as view engine
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
