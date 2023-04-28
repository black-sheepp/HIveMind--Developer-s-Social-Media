const router = require('express').Router();

const postController = require('../Controller/post_controller')

router.post('/create-post',postController.createPost)

module.exports = router