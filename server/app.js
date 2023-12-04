const exp = require('constants');
const express=require('express');
const mongoose =require('mongoose')
const cors=require("cors");
const app=express();
const port=1000;


app.use((cors));
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/sih');

const employeeScheme= new mongoose.Schema({
    id:String,
    password:String
});
const EmployeeModel=mongoose.model("employees",employeeScheme);
app.post("/login",(req,res)=>{
EmployeeModel.create(req.body).then(employees=>res.json(employees)).catch(err=>res.json(err));
})

app.listen(port,(req,res)=>{
    console.log("server started");
});