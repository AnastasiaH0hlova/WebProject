const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')
const typeDishRouter = require('./typeDishRouter')


router.use('/user', userRouter)
router.use('/type_dish', typeDishRouter)
router.use('/dish', dishRouter)

module.exports = router