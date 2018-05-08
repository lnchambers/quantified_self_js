var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/:meal_id/foods', function(req, res, next) {
  res.json({ obligatory: 'JSON' });
});

router.post('/:meal_id/foods/:id', function(req, res, next) {
  res.json({ obligatory: 'Success Message' })
})

router.delete('/:meal_id/foods/:id', function(req, res, next) {
  res.json({ you: "Killed it" })
})

module.exports = router;
