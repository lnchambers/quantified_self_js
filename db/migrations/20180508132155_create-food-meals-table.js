exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE food_meals(
    id SERIAL PRIMARY KEY NOT NULL,
    food_id FOREIGN KEY NOT NULL,
    meal_id FOREIGN KEY NOT NULL,
    created_at TMESTAMP,
    updated_at TIMESTAMP
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE food_meals`
  return knex.raw(dropQuery)
};
