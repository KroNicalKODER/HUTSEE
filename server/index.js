import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import authRoutes from './Routes/auth.js'
import UserRoutes from './Routes/users.js'
import cookieParser from "cookie-parser"
import UserPostsRoutes from "./Routes/userPosts.js"
import AccommodationRoutes from "./Routes/accommodations.js"


const app = express()

dotenv.config()

mongoose.set('strictQuery',true)

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to Database")
    }).catch((err)=>{
        throw(err)
    })
}

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDINARYAPI,
    api_secret: process.env.CLOUDINARYAPISECRET
})

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users", UserRoutes)
app.use("/api/posts", UserPostsRoutes)
app.use("/api/accommodation",AccommodationRoutes)


app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Unknown Error Occured"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(8800,()=>{
    connect()
    console.log("Connected to server at port 8800")
})