const Food = require('../models/food')

class foodsController {

  static index(request, response, next){
    Food.all()
    .then(foods => response.json(foods))
  }
}
