var express = require('express');
var router = express.Router();
var models = require('../models/');

//how to get a specific page
router.get('/:url_name', function(req, res) {
  models.Page.findOne({url_name: req.params.url_name}, function (err, pages) {
      res.render('wikis', {docs: pages});
  });
});

module.exports = router;