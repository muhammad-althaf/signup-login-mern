const mongoose =require('mongoose')

const EmployeeSchema = new mongoose.Schema({

    // name:String,
    // password:String
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel