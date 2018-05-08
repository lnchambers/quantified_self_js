var express = require('express');
var router = express.Router();
const Food = require('../models/food')

router.get('/', function(req, res, next) {
  Food.all()
 .then(foods => res.json(foods))
})

router.get('/:id', function(req, res, next) {
  Food.find_by(req.params.id)
  .then(food => res.json(food))
})

router.post('/', function(req, res, next) {
  Food.create(req.body.food)
  .then(food => res.json(food))
})

router.patch('/:id', function(req, res, next) {
  Food.update(req.params.id, req.body.food)
  .then(food => res.json(food))
})

module.exports = router;
