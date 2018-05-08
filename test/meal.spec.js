const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp)

const Meal = require('../models/meal')
const Food = require('../models/food')
const FoodMeal = require('../models/food_meal')

describe("Meal API", function() {
  this.timeout(0)
  beforeEach((done) => {
    database.seed.run()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
  })

  it("GET api/v1/meals should return all meals", (done) => {
    chai.request(app)
    .get('/api/v1/meals')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      done()
    })
  })
})
