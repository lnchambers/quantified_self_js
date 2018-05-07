const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Food {

  static all(){
    return database('foods').select('id', 'name', 'calories')
  }

  static find_by(id){
    return database('foods').where('id', id)
  }

}

module.exports = Food
