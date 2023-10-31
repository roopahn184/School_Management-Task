const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const data = require('./server');

const uri="mongodb+srv://Roopa:Roopa@cluster0.dltebo1.mongodb.net/roopadata?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("not connected",err)});

const app=express()
app.use(cors({origin:'*'}))
app.use(bodyParser.json())
app.use(express.json());


app.get('/student',async(req,resp)=>{
    
    const value = await data.find();
    const file=value.filter((result)=>{
        return result.student
    })
    // console.log(file);
   
    return resp.status(200).json({success:true, data: file})
})
app.get('/teacher',async(req,resp)=>{
    
    const value = await data.find();
    const file=value.filter((result)=>{
        return result.teacher
    })
    console.log(file);
   
    return resp.status(200).json({success:true, data: file})
})


app.post('/student',async(req,resp)=>{
    const student=req.body
    const sfile={student}
    const doc=new data(sfile)
    const res = await doc.save()
    console.log(sfile)
    resp.status(201).json(sfile);
})

app.post('/teacher',async(req,resp)=>{
    const teacher=req.body
    const tfile={teacher}
    const doc=new data(tfile)
    const res=await doc.save()
    console.log(tfile)
    resp.status(201).json(tfile)
})





const PORT=4000
app.listen(PORT,()=>{
        console.log("sever is running in",PORT)
})