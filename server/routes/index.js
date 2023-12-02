const Router = require('express')
const router = new Router()

const postImgRouter = require('./postImgRouter')
const postRouter = require('./postRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/images', postImgRouter)

module.exports = router