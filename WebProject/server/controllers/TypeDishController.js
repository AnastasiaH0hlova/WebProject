const {Type_Dish} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeDishController {
    async create(req,res){
        const {name} = req.body
        const type_dish = await Type_Dish.create({name})
        return res.json(type_dish)

    }

    async getAll(req,res){
        const types = await Type_Dish.findAll()
        return res.json(types)
    }

    
}

module.exports = new TypeDishController()