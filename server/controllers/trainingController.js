const {Training, Exercise} = require('../models/models')
const ApiError = require('../error/ApiError')

class TrainingController {

    async create(req, res, next) {

        try {
            let {date, training_name, exercise_names, userId} = req.body
            console.log({date, training_name, exercise_names, userId})
            const training = await Training.create({date, training_name, userId})
            if (exercise_names) {
                console.log(training)
                await Promise.all(exercise_names.map((item) => {
                    return Exercise.create({
                        title: item.title,
                        text: JSON.stringify(item.text),
                        trainingId: training.id,
                        userId: userId
                    })
                }));
            }
            return res.json(training)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const food = await Training.destroy({where: {id}})
            return res.json(food)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {date, exercise_name} = req.query
        const training = await Training.findAll({where: date, exercise_name})
        return res.json(training)
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const food = await Training.findOne(
                {
                    where: {id},
                    include: [{model: Exercise, as: 'exercise_names'}]
                }
            )
            return res.json(food)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TrainingController()