const router = require('express').Router();
const homeController = require('../Controller/home_controller')

router.get('/',homeController.home)

module.exports = router;