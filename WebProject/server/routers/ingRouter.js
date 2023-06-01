const Router = require('express')
const router = new Router()
const IngController = require('../controllers/IngController')
const checkRole = require('../middleware/checkRoleMiddleware')

// router.post('/', IngController.create)
router.get('/', IngController.getAll)
// router.get('/:id',  IngController.getOne)
// router.get('/',  IngController.getAllByType)
// router.delete('/:id', IngController.deleteOne)


module.exports = router