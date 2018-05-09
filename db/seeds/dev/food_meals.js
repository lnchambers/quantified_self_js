exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE food_meals RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          [2, 3, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          [3, 3, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          [1, 2, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          [4, 1, new Date, new Date]
        )
      ])
    });
};
