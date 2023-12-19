const exp = require('constants');
const express=require('express');
const mongoose =require('mongoose')
const cors=require("cors");
const app=express();
const port=1000;


 app.use((cors()));
  
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/sih');

const employeeScheme= new mongoose.Schema({
    id:String,
    password:String
});
const EmployeeModel=mongoose.model("employees",employeeScheme);
app.post("/register",async(req,res)=>{
    const{id,password}=req.body;
try{
    await EmployeeModel.create({
id,
password,
    });
    res.send({status:"ok"});
}catch(err){
    res.send(err);
}
})
app.get("/services",async(req,res)=>{
    var myJson = {'mineId':'123', 'clusterId':'909','mineName':'hawra','nearMine':'gokhra'};
    var slides=[
        {
        id:"1",
        mineSender:"chapapur",
        senderName:"Ajinkya",
        clusterId:"123",
        clusterName:"ecl",
        priority:"2",
        expectedIn:"12"
        
    
        },
        {
        id:"2",
        mineSender:"chapapur",
        senderName:"Ajinkya",
        clusterId:"123",
        clusterName:"ecl",
        priority:"2",
        expectedIn:"12"
            
        }
    ];
    try{
    await res.send(slides);
    }catch(err){
        res.send(err);
    }
})
app.post("/service",async(req,res)=>{
const ans=await req.body;
console.log(ans);
})
app.post("/login",async(req,res)=>{
    const {id,password}=req.body;
    try{
        await EmployeeModel.findOne({id:id}).then(employee=>{
            if(employee){
                if(employee.password==password){
                    console.log("success");
                    res.send({status:"ok"});
                }else{
                    console.log("wrong password");
                }
            }else{
                console.log("no registered user");
            }
        })
    }catch(err){
        res.send(err);
    }
})

app.listen(port,(req,res)=>{
    console.log("server started");
});