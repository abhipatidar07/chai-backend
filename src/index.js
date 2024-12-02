//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { app } from "./app.js";

// import mongoose  from "mongoose";
// import { DB_NAME } from "./constants"; 
import connectDB from "./db/database.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection error",err);
})











/*
import express from "express"
const app = express()

//ifi type functiokn in javascript which imedietly execute the code for better performance

( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERR: ",error);
        throw error
       })

       app.listen(process.env.PORT, ()=>{
          console.log(`App is listening on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})
*/