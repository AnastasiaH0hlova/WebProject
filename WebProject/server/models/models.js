const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type:DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    name: {type:DataTypes.STRING},
    bday: {type:DataTypes.DATE},
    address: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaul: "USER"}
})

const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Basket_Dish = sequelize.define('basket_dish',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count:{type:DataTypes.INTEGER}
})

const Order = sequelize.define('order',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    date:{type:DataTypes.DATE}
})

const Dish = sequelize.define('dish',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false},
    description: {type:DataTypes.STRING, allowNull:false},
    weight:{type:DataTypes.INTEGER, allowNull:false},
    calories:{type:DataTypes.INTEGER, allowNull:false},
    cost:{type:DataTypes.INTEGER, allowNull:false},
    photo:{type:DataTypes.INTEGER, allowNull:false}
})

const Type_Dish = sequelize.define('type_dish',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false}
})

const Dish_Info = sequelize.define('dish_info',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    unit:{type:DataTypes.STRING, allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Dish.hasMany(Dish_Info, {as: 'dish_info'})
Dish_Info.belongsTo(Dish)

Basket.hasMany(Basket_Dish)
Basket_Dish.belongsTo(Basket)

Type_Dish.hasMany(Dish)
Dish.belongsTo(Type_Dish)

Dish.hasMany(Basket_Dish)
Basket_Dish.belongsTo(Dish)

Basket.hasMany(Order)
Order.belongsTo(Basket) 

module.exports = {
    User,
    Basket,
    Basket_Dish,
    Dish,
    Dish_Info,
    Type_Dish,
    Order 
}
