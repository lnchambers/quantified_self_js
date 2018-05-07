const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')
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
    chai.request(app)
    .get('/api/v1/foods')
    .then((response) => {
      response.should.have.status(200)
      response.should.be.json
      response.body.should.deep.equal(
        [
          { id: 1, name: 'Opakawagalaga Eupanifahorious', calories: 300 },
          { id: 2, name: 'Seaweed', calories: 3000 },
          { id: 3, name: 'Fruit Snax 100% YOLO SWAG', calories: 42000000 },
          { id: 4, name: 'Landweed', calories: 60 }
        ]
      )
    })
  })

  describe("GET api/v1/foods/:id should return one food", () => {
    chai.request(app)
    .get('/api/v1/foods')
    .then((response) => {
      response.should.have.status(200)
      response.should.be.json
    })
  })
})
