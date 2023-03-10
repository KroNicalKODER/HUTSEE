import mongoose from "mongoose";
import UserPosts from "../Models/UserPosts.js";
import err from '../error.js'

export const newPost = async(req,res,next) => {
    try {
        const newPost = new UserPosts({
            UserId : req.user.id,
            ...req.body
        })
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        next(error)
    }
}