var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.get('/users', function(err, requests, responses, obj) {
    assert.ifError(err);
  
    res.json(obj);

  });
});

/* GET users/ id listing. */
router.get('/:id', function(req, res, next) {
  client.get(`/users/${req.params.id}`, function(err, requests, responses, obj) {
    assert.ifError(err);
  
    res.json(obj);

  });
});

/* PUT users listing. */
router.put('/:id', function(req, res, next) {
  client.get(`/users/${req.params.id}`, req.body,function(err, requests, responses, obj) {
    assert.ifError(err);
  
    res.json(obj);

  });
});

/* DELETE users listing. */
router.delete('/:id', function(req, res, next) {
  client.del(`/users/${req.params.id}`, function(err, requests, responses, obj) {
    assert.ifError(err);
  
    res.json(obj);

  });
});

  /* POST users listing. */
router.post('/', function(req, res, next) {
  client.post(`/users`, req.body,function(err, requests, responses, obj) {
    assert.ifError(err);
  
    res.json(obj);

  });
});

module.exports = router;