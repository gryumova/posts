const Router = require('express')
const router = new Router()
const PostImgController = require('../controllers/postImgController')

router.post('/', PostImgController.create)
router.get('/', PostImgController.get)

module.exports = router
