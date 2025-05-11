let mongoose=require("mongoose")
let schema=mongoose.Schema({
    todo:{
        type:String,
        required:true
    }
})

let TODOS=mongoose.model("TODOS",schema)
module.exports=TODOS