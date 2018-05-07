const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp)

describe("Food API", () => {
  beforeEach((done) => {
      Food.remove({}, (err) => {
         done()
      })
  })

  describe("GET api/v1/foods should return all foods", () => {
    chai.request(server)
    .get('/api/v1/foods')
    .then((response) => {
      response.should.have.status(200)
      response.should.be.json
      console.log(response)
    })
  })
})
