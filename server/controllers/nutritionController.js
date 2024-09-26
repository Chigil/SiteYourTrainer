const {Nutrition} = require('../models/models')
const ApiError = require('../error/ApiError')

class NutritionController {

    async create(req, res, next) {
        try {
            const {date, name_nutrition, calories, userId} = req.body
            const food = await Nutrition.create({date, name_nutrition, calories, userId})
            return res.json(food)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req, res) {
        const {date, name_nutrition, calories, userId} = req.query
        const food = await Nutrition.findAll({where: date, name_nutrition, calories, userId})
        return res.json(food)
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const food = await Nutrition.destroy({where: {id}})
            return res.json(food)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new NutritionController()