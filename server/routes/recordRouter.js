const Router = require('express')
const router = new Router()
const recordController = require('../controllers/recordController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),recordController.create)
router.delete('/:id',checkRole('ADMIN'),recordController.delete)
router.get('/',recordController.get)

module.exports = router