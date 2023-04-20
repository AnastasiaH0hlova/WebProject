const Router = require('express')
const router = new Router()
const DishController = require('../controllers/DishController')

router.post('/', DishController.create)
router.get('/', DishController.getAll)
router.get('/:id',  DishController.getOne)
router.delete('/:id',  DishController.deleteOne)

module.exports = router