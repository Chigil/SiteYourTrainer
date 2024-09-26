const {Weight} = require('../models/models')
const ApiError = require('../error/ApiError')

class WeightController {

    async create(req, res, next) {
        try {
            const {date, weight, userId} = req.body
            const kg = await Weight.create({date, weight, userId})
            return res.json(kg)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req, res) {
        const {date, weight, userId} = req.query
        const kg = await Weight.findAll({where: date, weight, userId})
        return res.json(kg)
    }
}

module.exports = new WeightController()