// i am using worldshorts2806 @gmail.com  for mongoose and cloudinary
// monoose password is : rathodarunnayak9908
// cloudinary : worldshorts2806@gmail.com

import express, { urlencoded } from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app=express()
const port=process.env.PORT || 4000
// console.log("🔍 ENV MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
connectCloudinary()


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()) 

// api endpoints
// // localhost:4000/api/admin/add-doctor
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Hello api working ")
})

app.listen(port,()=>{
    console.log("Server is running at ",port)
})