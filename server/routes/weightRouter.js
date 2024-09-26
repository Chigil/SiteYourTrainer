const Router = require('express')
const router = new Router()
const weightController = require('../controllers/weightController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',checkRole('ADMIN'),weightController.create)
router.get('/',weightController.get)

module.exports = router