const uuid = require('uuid')
const path = require('path')
const {Dish} = require('../models/models')
const ApiError = require('../error/ApiError')

class DishController {
    async create(req,res, next){
        try{
            
            const {name, typeID, description, weight, calories, cost, dish_info} = req.body
            const {img} = req.files
            let fileName = uuid.v4()+'.jpg'
            img.mv(path.resolve(__dirname,'..','static', fileName))
            const dish = await Dish.create({name, typeID, description, weight, calories, cost, dish_info, img: fileName})
            return res.json(dish)
        }
        catch(e)
        {
            next(ApiError.badRequest(e.message))
        }

        
    }

    async getAll(req,res){
        
    }

    async getOne(req,res){
        
    }

    
}

module.exports = new DishController()