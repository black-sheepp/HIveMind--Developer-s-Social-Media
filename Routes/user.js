const router = require('express').Router();
const usersController = require('../Controller/users_controller')
const passport = require('passport')

router.post('/create-user',usersController.createUser)
router.post('/create-session', passport.authenticate(
    "local",
    {
        failureRedirect: '/sign-in'
    }
), usersController.createSession)
router.get('/dashboard',passport.checkAuthentication,usersController.dashboard)
router.get('/profile',passport.checkAuthentication,usersController.profile)
router.get('/sign-out',usersController.signOut)
module.exports = router;