var express = require('express');
var router = express.Router();
const Meal = require('../models/meal')

router.get('/', function(req, res, next) {
  Meal.all()
  .then(meals => res.json(meals))
});

router.get('/:meal_id/foods', function(req, res, next) {
  res.json({ obligatory: 'JSON' });
});

router.post('/:meal_id/foods/:id', function(req, res, next) {
  res.json({ obligatory: 'Success Message' })
})

router.delete('/:meal_id/foods/:id', function(req, res, next) {
  res.json({ you: "Killed it" })
})

module.exports = router;
