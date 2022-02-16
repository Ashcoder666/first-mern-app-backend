const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app = express();
const contactSchema = require("./model/name")

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ashcoder:ash123@cluster0.zukbu.mongodb.net/sampledatabase?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true});

mongoose.connection.once('open',()=>{
    console.log("backend is connected with mongodb")
})

app.post("/create", async (req,res)=>{
    const name=req.body.name;
    const number=req.body.number;
    const input = new contactSchema({name: name,number:number})
    try{
      await  input.save()
    }catch(err){
        console.log(error)
    }
})

app.get('/view',(req,res)=>{
    contactSchema.find({},(err,response)=>{
        if(err){
            console.log(err)
        }
        res.send(response)
    })
})






app.listen(3001,()=>{
    console.log("server started at port 3001")
});