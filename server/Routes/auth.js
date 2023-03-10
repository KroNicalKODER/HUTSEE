import express from "express";
import { signUp, logIn } from "../Controllers/auth.js";

const router = express.Router()

//Register a user
router.post("/register",signUp)

//Login a user
router.post('/login',logIn)

export default router