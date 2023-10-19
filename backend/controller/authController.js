import User from "../models/usermodel.js"
import bcryptjs from "bcryptjs";

export const signup= async (req,res)=>{


   const {username,email,password}=req.body;

   //hash the password:
   const hashedPassword=bcryptjs.hashSync(password,10);

   const newUser=new User({username,email,password: hashedPassword});


   try {
    await newUser.save();
   res.status(201).json({
    message: 'user created successfully.'
   });
   } catch (error) {
    res.status(501).json(error.message)
   }
  
}