const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/BasketController')

router.post('/', BasketController.create)
router.get('/', BasketController.getAll)


module.exports = router