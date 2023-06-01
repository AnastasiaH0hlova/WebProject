const {Dish_Info} = require('../models/models')
const ApiError = require('../error/ApiError')

class IngController {
    // async create(req,res){
    //     const {name} = req.body
    //     const type_dish = await Type_Dish.create({name})
    //     return res.json(type_dish)

    // }

    async getAll(req,res){
        
        const ings = await  Dish_Info.findAll({
            attributes: [              
              [sequelize.fn('DISTINCT ', sequelize.col('name')), 'name'],              
            ],
          })
        return res.json(ings)
    }

    // async getOne(req,res){
    //     const {id} = req.params
    //     const type = await Type_Dish.findOne({
    //         where: {id},
    //         include: [{model:Dish,as: 'dish'}]
    //     })
    //     return res.json(dish) 
    // }

    
}

module.exports = new IngController()