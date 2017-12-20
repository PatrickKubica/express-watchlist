const express = require('express');

const router = express.Router();

router.get('/show', (req, res) => {
  res.render('movies_show');
});

module.exports = router;
