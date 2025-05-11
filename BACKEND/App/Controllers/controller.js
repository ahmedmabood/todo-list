const TODOS = require("../models/models")


let todoInsert=(req,res)=>{
  let {todo}=req.body

  let saveTodo=new TODOS({
    todo:todo
  })
  saveTodo.save().then(()=>{
    res.send({
        status:1,
        message:"todo saved"
    })
  })
}

let todoList=(req,res)=>{

    setTimeout(async()=>{
        let todolist=await TODOS.find()
        console.log(todolist);

        

        res.send({
            status:1,
            message:"here are todos",
            data:todolist
        })
    },500)
    
}

let todoDEL = async(req,res)=>{
    let todoid=req.params.id
    let tododel=await TODOS.deleteOne({_id:todoid})
    res.send({
        status:1,
        message:"todo deleted",
        data:tododel
    })
}

let todoUpdate = async(req,res)=>{
    let todoid=req.params.id
    let {todo}=req.body
    update={
        todo:todo
    }

    let todoupdate=await TODOS.updateOne({_id:todoid},update)

    res.send({
        status:1,
        message:"todo updated",
        data:todoupdate
    })
}

module.exports={todoInsert,todoList,todoDEL,todoUpdate}