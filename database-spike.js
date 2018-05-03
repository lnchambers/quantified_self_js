const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

database.raw(
  'INSERT INTO foods (name, calories, created_at, updated_at) VALUES (?,?,?,?) RETURNING *',
  ["I open bananas from the wrong side", 400, new Date, new Date]
  ).then(function(food) {
    console.log(food.rows)
    process.exit()
  })

database.raw('SELECT * FROM foods')
  .then((data) => {
    console.log(data.rows)
    process.exit()
  })
