let express=require('express')
let mongoose=require('mongoose')
let cors=require('cors')
const { TodoRoute } = require('./App/routes/routes')

require("dotenv").config()

app=express()
app.use(express.json())
app.use(cors())

app.use('/api/TODO',TodoRoute)

mongoose.connect(process.env.DBURL).then(()=>{
    app.listen(process.env.PORT||3000)
}).catch((err)=>{
    console.log(err);
})