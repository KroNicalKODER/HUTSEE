import express from 'express'
import { get, Update ,del } from '../Controllers/user.js'
import checkToken from '../verifyToken.js'

const router = express.Router()

//UPDATE USER
router.put("/:id",checkToken,Update)

//DELETE USER
router.delete("/:id",checkToken,del)

//GET USER
router.get("/find/:id",get)

export default router