const Router = require('express')
const router = new Router()
const DishController = require('../controllers/DishController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  checkRole('ADMIN'), DishController.create)
router.get('/', DishController.getAll)
router.get('/:id',  DishController.getOne)
router.get('/',  DishController.getAllByType)
router.delete('/:id', DishController.deleteOne)


module.exports = router