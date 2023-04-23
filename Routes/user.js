const router = require('express').Router();
const usersController = require('../Controller/users_controller')

router.post('/create-user',usersController.createUser)

module.exports = router;