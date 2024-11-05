const mongoose=require("mongoose")

const Dbconnect=async function(){
    const db=process.env.DB_URL
    mongoose.connect(db)
    .then(()=>{
        console.log("MongoDb Connected")
    })
    .catch((err)=>{
        console.log("error connecting to mongoDb : ",err)
    })
}

module.exports={
    Dbconnect
}
