const router = require('express').Router();
const homeController = require('../Controller/home_controller')

router.get('/',homeController.home)
router.get('/sign-in',homeController.signIn)
router.get('/sign-Up',homeController.signUp)
router.use('/user', require('./user'))
module.exports = router;