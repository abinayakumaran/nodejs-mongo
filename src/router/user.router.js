const router = require('express').Router();
const user = require('../controller/user.controller');

// Create a new User
router.post('/', user.createUser);

// Retrieve all Users
router.get('/', user.getAllUser);

// Retrieve  Users any params
router.get('/find/param', user.getUserByParams);

// Update a User with object id
router.put('/:id', user.updateUser);

module.exports = router;