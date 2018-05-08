exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE food_meals RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          ["Opakawagalaga Eupanifahorious", 300, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          ["Seaweed", 3000, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          ["Fruit Snax 100% YOLO SWAG", 42000000, new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO food_meals (food_id, meal_id, created_at, updated_at) VALUES (?, ?, ?, ?)',
          ["Landweed", 60, new Date, new Date]
        )
      ])
    });
};
