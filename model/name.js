const mongoose= require("mongoose");


const contacts = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    }
})

const contactSchema = mongoose.model("contacts",contacts)
module.exports= contactSchema;