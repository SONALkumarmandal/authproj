const errMid=(err,req,res,next)=>{
    const status=err.status || 422
    const message=err.message || "correct yourself"
    const extraDetails=err.extraDetails || "backend error"

    res.status(status).json({message,extraDetails})

}

module.exports=errMid