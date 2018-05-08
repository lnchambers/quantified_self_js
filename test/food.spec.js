const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp)

const Food = require('../models/food')

describe("Food API", () => {
  beforeEach((done) => {
    database.seed.run()
    .then(() => done())
    .catch((error) => {throw error})
    .done()
  })

  it("GET api/v1/foods should return all foods", (done) => {
    chai.request(app)
    .get('/api/v1/foods')
    .end((err, response) => {
      response.should.have.status(200);
      response.should.be.json;
      response.body[0].should.deep.equal({ id: 1, name: 'Opakawagalaga Eupanifahorious', calories: 300 })
      response.body[1].should.deep.equal({ id: 2, name: 'Seaweed', calories: 3000 })
      response.body[2].should.deep.equal({ id: 3, name: 'Fruit Snax 100% YOLO SWAG', calories: 42000000 })
      response.body[3].should.deep.equal({ id: 4, name: 'Landweed', calories: 60 })
      done();
    })
  })

  it("GET api/v1/foods/:id should return one food", (done) => {
    chai.request(app)
    .get('/api/v1/foods/1')
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      response.body[0].id.should.equal(1)
      response.body[0].name.should.equal("Opakawagalaga Eupanifahorious")
      response.body[0].calories.should.equal(300)
      done()
    })
  })

  it("POST api/v1/foods should create food yum", (done) => {
    chai.request(app)
    .post('/api/v1/foods')
    .send({ food: { name: "Opakawagalaga's Pawpaws", calories: 42 } })
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      response.body.calories.should.equal(42)
      response.body.name.should.equal("Opakawagalaga's Pawpaws")
      done()
    })
  })

  it("PATCH api/v1/foods/:id should update a food", (done) => {
    chai.request(app)
    .patch('/api/v1/foods/5')
    .send({ food: { name: "Eupanifahorious Mints", calories: 43 } })
    .end((err, response) => {
      response.should.have.status(200)
      response.should.be.json
      response.body.name.should.equal("Eupanifahorious Mints")
      response.body.calories.should.equal(43)
      done()
    })
  })

  it("DELETE api/v1/foods/:id should remove food", (done) => {
    chai.request(app)
    .delete('/api/v1/foods/9')
    .end((err, response) => {
      response.should.have.status(200)
      done()
    })
  })
})
