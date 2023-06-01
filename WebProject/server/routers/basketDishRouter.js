const Router = require('express')
const router = new Router()
const BasketDishController = require('../controllers/BasketDishController')

router.post('/', BasketDishController.create)
router.get('/', BasketDishController.getAll)


module.exports = router