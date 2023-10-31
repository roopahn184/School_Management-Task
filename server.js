const mongoose=require('mongoose')

const data=new mongoose.Schema({
    student:Object,
    teacher:Object,
    
})

const dataSchema=new mongoose.model("data",data)

module.exports=dataSchema