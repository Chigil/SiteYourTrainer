const {Exercise} = require('../models/models')
const ApiError = require('../error/ApiError')

class ExerciseController{

    async create(req,res,next){
        try {
            const {title, text} = req.body
            console.log(title,text)
            const exercise = await Exercise.create({title, text})
            return res.json(exercise)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req,res){
        const {title,text} =  req.query
        const exercise = await Exercise.findAll({where:title,text})
        return res.json(exercise)
    }
}
module.exports = new ExerciseController()