const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/TypeDishController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', TypeController.create) //checkRole('ADMIN')
router.get('/', TypeController.getAll)


module.exports = router