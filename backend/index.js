const express=require("express");
const app=express();
const { createCard }=require("./types");
const { dbCard }=require("./db");
app.use(express.json());
const cors = require("cors");
app.use(cors());


app.get("/card",async function(req,res){
    const findCard=await dbCard.find({}) 
    res.json({
        findCard
    })
    
})
app.post("/card",async function(req,res){
    const createCardPayLoad=req.body;
    const parsePayLoad=createCard.safeParse(createCardPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return;
    }
    await dbCard.create({
   name: createCardPayLoad.name,
  description: createCardPayLoad.description,
  interests: createCardPayLoad.interests,
  linkedIn: createCardPayLoad.linkedIn,
  github: createCardPayLoad.github

    }) 
    res.json({
        msg:"card created successfully"
    })

})
app.listen(3000);
