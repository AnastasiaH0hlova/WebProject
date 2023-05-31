const uuid = require('uuid')
const path = require('path')
const {Dish, Dish_Info} = require('../models/models')
const ApiError = require('../error/ApiError')

class DishController {
    async create(req,res, next){
        try{
            
            let {name, typeDishId, description, weight, calories, cost, dish_info} = req.body
            const {photo} = req.files
            let fileName = uuid.v4()+'.jpg'
            photo.mv(path.resolve(__dirname,'..','static', fileName))

            if(dish_info)
            {
                dish_info = JSON.parse(dish_info)
                dish_info.array.forEach(i => Dish_Info.create({
                    name: i.name,
                    quantity: i.quantity,
                    unit: i.unit,
                    dishId: dish.id
                    
                }))
            }

            
            const dish = await Dish.create({name, typeDishId, description, weight, calories, cost, photo: fileName})
            return res.json(dish)
        }
        catch(e)
        {
            next(ApiError.badRequest(e.message))
        }

        
    }

    async getAll(req,res){
        let  {typeDishId, limit, page} = req.query
        page = page|| 1
        limit = limit || 9
        let offset = (page-1)*limit
        let dishes;
        if (typeDishId) dishes = await Dish.findAndCountAll({where:{typeDishId}, limit, offset})        
        else dishes = await Dish.findAndCountAll({ limit, offset})
        return res.json(dishes)        
    }

    async getAllByType(req,res){
        const {typeDishId} = req.params
        const dish = await Dish.findAll({
            where: {typeDishId}
        })
        return res.json(dish) 
    }

    async getOne(req,res){
        const {id} = req.params
        const dish = await Dish.findOne({
            where: {id},
            include: [{model:Dish_Info,as: 'dish_info'}]
        })
        return res.json(dish) 
    }

    async deleteOne(req,res){
        try{
        const {id} = req.params
        await Dish_Info.destroy({
            where: {dishId: id}
        })
        await Dish.destroy({
            where: {id}
        })

        return res.json("Блюдо и связанные с ним ингредиенты успешно удалены") 

    }catch(e)
    {
         alert('Взорвалось что-то и блюдо и его ингредиенты не удалились. Ошибка:'+ e.name+e.message);
    }
        
    }



    
}

module.exports = new DishController()