const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class FoodMeal {

  static create(meal, food){
    let attributes = { meal_id: meal, food_id: food}
    return database('food_meals')
    .insert(attributes)
    .returning(['id', 'food_id', 'meal_id'])
    .then(rows => rows[0])
  }

}

module.exports = FoodMeal
