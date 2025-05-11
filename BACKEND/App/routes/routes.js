let express=require('express')
const { todoInsert, todoList, todoDEL, todoUpdate } = require('../Controllers/controller')

let TodoRoute=express.Router()

TodoRoute.post("/save",todoInsert)
TodoRoute.get("/list",todoList)
TodoRoute.delete("/del/:id",todoDEL)
TodoRoute.put("/update/:id",todoUpdate)

module.exports={TodoRoute}