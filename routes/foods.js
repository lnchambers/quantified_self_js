var express = require('express');
var router = express.Router();
const Food = require('../models/food')

/* GET home page. */
router.get('/', function(req, res, next) {
  Food.all()
 .then(foods => res.json(foods))
})

router.get('/:id', function(req, res, next) {
  Food.find_by(req.params.id)
  .then(foods => res.json(foods))
})

module.exports = router;
