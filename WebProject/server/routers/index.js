const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')
const typeDishRouter = require('./typeDishRouter')
const basketDishRouter = require('./basketDishRouter')
const ingRouter = require('./ingRouter')


router.use('/user', userRouter)
router.use('/type_dish', typeDishRouter)
router.use('/dish', dishRouter)
router.use('/basket',basketDishRouter)
router.use('/ing',ingRouter)

module.exports = router
