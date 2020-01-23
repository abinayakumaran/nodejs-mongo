const router = require('express').Router();
const request = require('../controller/request.controller');

// Create a new Request
router.post('/', request.createRequest);

// Retrieve all Request
router.get('/', request.getAllRequest);

// Retrieve  Requests any params
router.get('/find/param', request.getRequestByParams);

// Update a Request with object id
router.put('/:id', request.updateRequest);

module.exports = router;