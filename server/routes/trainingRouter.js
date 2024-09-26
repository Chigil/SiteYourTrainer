const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),trainingController.create)
router.delete('/:id',trainingController.delete)
router.get('/:id',trainingController.getOne)
router.get('/',trainingController.getAll)


module.exports = router