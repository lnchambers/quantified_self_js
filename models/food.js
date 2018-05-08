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
    return database('foods')
    .insert(attributes)
    .returning(['id', 'name', 'calories'])
    .then(rows => rows[0])
  }

  static update(id, attributes){
    return database('foods')
    .where('id', id)
    .update(attributes)
    .returning(['id', 'name', 'calories'])
    .then(rows => rows[0])
  }

  static destroy(id) {
    return database('foods')
    .where('id', id)
    .del()
  }

}

module.exports = Food
