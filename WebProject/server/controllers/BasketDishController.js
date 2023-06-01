const uuid = require('uuid')
const path = require('path')
const {User, Basket_Dish, Dish} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const sequelize = require('../db')
//const TransactionDatabase = require("sqlite3-transactions");


class BasketDishController {
    async create(req,res, next){
       
        const t = await sequelize.transaction();
        try {

            const {name,count} = req.body
            const dish = await Dish.findOne({
            where: {name}
            },{ transaction: t });
            const dishId = dish.id

            const token = req.headers.authorization.split(' ')[1]
            if(!token) res.status(401).json({message:"Не авторизован"})
            const email = jwt.verify(token,process.env.SECRET_KEY).email
            
            const userID = await User.findOne({where:{email}},{ transaction: t });
            const userId = userID.id        

            const basket_dish = await Basket_Dish.create({count, userId, dishId},{ transaction: t });
            await t.commit();
            return res.json(basket_dish)


          
            }
        catch(e)
        {
            
            next(ApiError.badRequest(e.message))
            await t.rollback();
        }

        
    }

    async getAll(req,res){

        const token = req.headers.authorization.split(' ')[1]
        if(!token) res.status(401).json({message:"Не авторизован"})
        const email = jwt.verify(token,process.env.SECRET_KEY).email
            

        const userID = await User.findOne({where:{email}})
        const userId = userID.id    
        
        const basket_dishes_ID = await Basket_Dish.findAll({where:{userId}})


        return res.json(basket_dishes_ID)        
    }

   /*  async getOne(req,res){
        const {id} = req.params
        const dish = await Dish.findOne({
            where: {id},
            include: [{model:Dish_Info,as: 'dish_info'}]
        })
        
        return res.json(dish) 
    }
 */

    
}

module.exports = new BasketDishController()