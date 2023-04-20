const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT||5000
const cors = require('cors')
const router = require('./routers/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpLoad = require('express-fileupload')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpLoad())
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/api', router)

//обработка ошибок, последний middleware
app.use(errorHandler)
/*   app.get('/',(req,res)=>{
    res.status(200).json({message:'WORKING!!!'})
})  */

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, ()=>console.log('Server started on port', PORT))

    } catch(e){
        console.log(e)
    }
}

start()


