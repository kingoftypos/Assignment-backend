const express = require("express");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");
const app=express();
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");


app.use("/", authRouter);
app.use("/", profileRouter);

connectDB().then(()=>{
    console.log("Connected to MongoDB successfully");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port 8080");
    });
    
}).catch((err)=>{
    console.error("Database cannot be connected",err);
});
