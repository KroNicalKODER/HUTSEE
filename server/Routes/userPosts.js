import express from 'express'
import { newPost } from '../Controllers/userPost.js'
import UserPosts from '../Models/UserPosts.js'
import checkToken from '../verifyToken.js'

const router = express.Router()
//NewPost
router.post("/",checkToken,newPost)

export default router