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

  static create(attributes){
    console.log("Hi There")
    return database('foods')
    .insert(attributes)
    .returning(['id', 'name', 'calories'])
    .then(rows => rows[0])
    console.log("General Kenobi")
  }

}

module.exports = Food
