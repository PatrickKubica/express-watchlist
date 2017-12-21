const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
  res.render('movies_list');
});

router.get('/add', (req, res) => {
  res.render('movies_add');
});

module.exports = router;
