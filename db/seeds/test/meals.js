exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY')
    .then(function () {
      return Promise.all([
        knex.raw(
          'INSERT INTO meals (name, created_at, updated_at) VALUES (?, ?, ?)',
          ["Elevensies", new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO meals (name, created_at, updated_at) VALUES (?, ?, ?)',
          ["Twelvsies", new Date, new Date]
        ),
        knex.raw(
          'INSERT INTO meals (name, created_at, updated_at) VALUES (?, ?, ?)',
          ["Snax Time Yolo Swaq 100%^^", new Date, new Date]
        )
      ])
    });
};
