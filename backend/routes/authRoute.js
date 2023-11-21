import express from "express";
import { signup } from "../controller/authController.js";
import { signin } from "../controller/authController.js";

const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);


export default router;