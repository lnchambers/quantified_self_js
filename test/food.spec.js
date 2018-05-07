const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp)

describe("Migrations", () => {
  this.timeout(0)
  before((done) => {
    database.migrate.latest()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
  })

describe("Cleaner", () => {
  this.timeout(0)
  beforeEach((done) => {
    database.seed.run()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
})

describe("GET api/v1/foods should return all foods", () => {
  return chai.request(server)
  .get('/api/v1/foods')
  .then((response) => {
    response.should.have.status(200)
  })
})
