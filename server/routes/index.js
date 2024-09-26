const Router = require('express')
const router = new Router()

const historyRouter = require('./historyRouter')
const newsRouter = require('./newsRouter')
const nutritionRouter = require('./nutritionRouter')
const weightRouter = require('./weightRouter')
const trainingRouter = require('./trainingRouter')
const recordRouter = require('./recordRouter')
const userRouter = require('./userRouter')

router.use('/news', newsRouter)
router.use('/training', trainingRouter)
router.use('/nutrition', nutritionRouter)
router.use('/weight', weightRouter)
router.use('/record', recordRouter)
router.use('/history', historyRouter)
router.use('/user', userRouter)

module.exports = router