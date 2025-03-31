import 'dotenv/config'
import mongoose from "mongoose";
import express from 'express'


import category from "./catschema.js";
import subcategory from "./subcatyschema.js";
import user from "./userschema.js";
import cors from "cors"
import path from 'path'
const __dirname = path.resolve();
const port=process.env.port||2001
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const server=express(

)
server.use(express.json())

//server.use(express.static( 'build'))
server.use(express.static(path.resolve(__dirname, 'build')));


//server.use(express.static('build'));
/*server.get('/*',  function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });*/
  
  
  /*server.get('/*', (req, res) => {
    // here where you were doing wrong
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });*/


//server.use(cors(corsOptions))


server.post("/postcat",async(req,res)=>{
    const user= new category(req.body);
    const resp=await user.save();
    res.json({resp,message:"category added succeesfully"})
})
server.post("/postsubcat",async(req,res)=>{
    const user= new subcategory(req.body);
    const resp=await user.save();
    res.json({resp,message:"subcategory added succeesfully"})
})
server.post("/postprod",async(req,res)=>{
    const users= new user(req.body);
    const resp=await users.save();
    res.json({resp,message:"user added succeesfully"})
})
server.get("/getcat",async(req,res)=>{
    //const user= new category(req.body);
    const resp=await category.find();

    res.json({resp,message:"category got succeesfully"})
})
server.get("/getsubcat",async(req,res)=>{
    //const user= new category(req.body);
    const resp=await subcategory.find(req.query);

    res.json({resp,message:"subcategory got succeesfully"})
})
server.get('*', (req, res) =>
    res.sendFile(path.resolve('build', 'index.html'))
  );
async function conn(){
    try{
    await mongoose.connect(process.env.db+process.env.dbname)
    console.log("database connected succeesfully")
    }
    catch(err){
        console.log("database connection failed")
        console.log(err)
    }
}
conn()
server.listen(port,()=>{
    console.log("server started")
})
hello how are you