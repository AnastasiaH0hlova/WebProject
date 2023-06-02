const Router = require('express')
const router = new Router()
const BasketDishController = require('../controllers/BasketDishController')

router.post('/', BasketDishController.create)
router.get('/', BasketDishController.getAll)
router.delete('/:id', BasketDishController.deleteOne)


module.exports = router