const {Record} = require('../models/models')
const ApiError = require('../error/ApiError')

class RecordController {

    async create(req, res, next) {
        try {
            const {date, exercise_name, weight, num, userId} = req.body
            const record = await Record.create({date, exercise_name, weight, num, userId})
            return res.json(record)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async get(req, res) {
        const {date, exercise_name, weight, num, userId} = req.query
        const record = await Record.findAll({where: date, exercise_name, weight, num, userId})
        return res.json(record)
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const food = await Record.destroy({where: {id}})
            return res.json(food)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new RecordController()