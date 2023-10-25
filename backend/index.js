import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
dotenv.config();
const app=express();

app.use(express.json())

//db connection start

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("No MongoDB connection URI provided.");
    process.exit(1); // Exit the application if there's no connection string
}

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to the database.');
    })
    .catch(err => {
        console.error('Error connecting to the database.', err);
        process.exit(1);
    });

//db connection end



app.use("/api/user",userRouter);
app.use("/api/auth", authRouter)



//middleware for errors

app.use((err,req,res,next)=>{

    const statusCode=err.statusCode || 500;
    const message=err.message || "internal server error";
    return res.status(statusCode).json(
        {
            success: false,
            message,
            statusCode
        }
    )
})
























app.listen(3000, ()=>{
    console.log("server started at port 3000")
})