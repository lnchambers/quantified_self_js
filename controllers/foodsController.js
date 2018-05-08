const Food = require('../models/food')

class foodsController {

  static index(request, response, next){
    Food.all()
    .then(foods => response.json(foods))
  }

  static create(request, response, next){
    Food.create(request.body.food)
    .then(food => response.status(201).json(food))
    .catch(error => response.sendStatus(400))
  }
}
