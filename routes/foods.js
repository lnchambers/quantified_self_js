var express = require('express');
var router = express.Router();
const Food = require('../models/food')

/* GET home page. */
router.get('/', function(req, res, next) {
  Food.all()
 .then(foods => res.json(foods))
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  res.send({ specific: 'json' })
})

module.exports = router;
