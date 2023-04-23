const router = require('express').Router();
const homeController = require('../Controller/home_controller')

router.get('/',homeController.home)
router.get('/sign-in',homeController.signIn)
module.exports = router;