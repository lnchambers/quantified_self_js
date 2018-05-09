var express = require('express');
var router = express.Router();
const Meal = require('../models/meal')
const Food = require('../models/food')
const FoodMeal = require('../models/food_meal')

router.get('/', function(req, res, next) {
  Meal.all()
  .then(meals => res.json(meals))
});

router.get('/:meal_id/foods', function(req, res, next) {
  Meal.find(req.params.meal_id)
  .then(meal => res.json(meal['foods']))
});

router.post('/:meal_id/foods/:id', function(req, res, next) {
  FoodMeal.create(req.params.meal_id, req.params.id)
  .then(res.status(201).json({ message: `Successfully added food to meal` }))
})

router.delete('/:meal_id/foods/:id', function(req, res, next) {
  FoodMeal.destroy(req.params.meal_id, req.params.id)
  .then(res.json({ message: `Successfully removed food from meal`}))
})

module.exports = router;
