require("dotenv").config()
const express=require("express")
const router = require("./Routes")
const cors=require("cors")
const { Dbconnect } = require("./utils/db.js")
const errMid = require("./middlewares/error-middleware.js")
const app=express()
const PORT=process.env.PORT
const corsOptions={
    origin:"http://localhost:5174",
    methods:"GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials:true
}
app.use(errMid)
app.use(cors(corsOptions))
app.use(express.json())
app.use("/",router)


Dbconnect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started at port ${PORT}`)
    })
})
.catch((err)=>{
    console.log("server did not connect",err);
})