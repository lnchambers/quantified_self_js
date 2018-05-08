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
  before((done) => {
    database.migrate.latest()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
  })

  beforeEach((done) => {
    database.seed.run()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
  })

  it.only("GET api/v1/meals should return all meals", (done) => {
    chai.request(app)
    .get('/api/v1/meals')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      response.body.should.deep.equal({ id: 1, name: "Elevensies" })
      done()
    })
  })

  it("GET api/v1/meals/:meal_id/foods should return all foods associated with the meal", (done) => {
    chai.request(app)
    .get('/api/v1/meals/2/foods')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      done()
    })
  })

  it("POST api/v1/meals/:meal_id/foods/:id should add food to meal", (done) => {
    chai.request(app)
    .post('/api/v1/meals/2/foods/2')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      done()
    })
  })

  it("DELETE api/v1/meals/:meal_id/foods/:id should remove food from meal", (done) => {
    chai.request(app)
    .delete('/api/v1/meals/2/foods/2')
    .end((err, response) => {
      response.should.have.status(200)
      done()
    })
  })
})
