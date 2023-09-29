const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const multer = require('multer')

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',(req,res)=>{
    const {name,password} =req.body;
    EmployeeModel.findOne({name: name})
    .then(user =>{
        if(user){
            if (user.password == password) {
                res.json("success")
            } else {
                res.json("The Password is Incorrect")
        
            }
        }else{
            res.json("NO Recored Existed")
        }
    })

})

app.post('/',(req,res)=>{
    if (req.body.name ===undefined || req.body.password ===undefined){
        
        res.json("no data")

        
    } else {
       EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))  
    }
   
})

app.listen(3002, ()=>{
    console.log("service is running");
    
})
