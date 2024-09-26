const Router = require('express')
const router = new Router()
const exerciseController = require('../controllers/exerciseController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),exerciseController.create)
router.get('/',exerciseController.get)


module.exports = router