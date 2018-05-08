exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_meals', function(table){
     table.increments()
     table.integer('meal_id').index()
     table.integer('food_id').index()
     table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_meals')
}
