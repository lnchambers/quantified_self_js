const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Meal {

  static all(){
    return database('meals').select('id', 'name').map(this.getFood)
  }

  static find(id){
    return database('meals').where('id', id).select('id', 'name').map(this.getFood)
    .then(rows => rows[0])
  }

  static getFood(meal){
    return database('foods')
    .select('foods.id', 'foods.name', 'foods.calories')
    .join('food_meals', {'foods.id': 'food_meals.food_id'})
    .where('food_meals.meal_id', meal.id)
    .then(foods => {
      meal.foods = foods
      return meal
    })
  }
}

module.exports = Meal
