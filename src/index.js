const express = require("express");
const { connectDB } = require("./config/db");
const app=express();
app.use(express.json());
connectDB().then(()=>{
    console.log("Connected to MongoDB successfully");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
    
}).catch((err)=>{
    console.error("Database cannot be connected",err);
});
