const Router = require('express')
const router = new Router()
const nutritionController = require('../controllers/nutritionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),nutritionController.create)
router.delete('/:id',nutritionController.delete)
router.get('/',nutritionController.get)


module.exports = router