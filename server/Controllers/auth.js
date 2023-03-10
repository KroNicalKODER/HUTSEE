import bcrypt from 'bcryptjs'
import error from '../error.js'
import User from '../Models/User.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req,res,next) => {
    console.log(req.body)
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash})

        await newUser.save()
        res.status(200).send("User Created Successfully")
    } catch (error) {
        next(error)
    }
}

export const logIn = async (req,res,next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) return next(error(404,"USER NOT FOUND"))

        const pass = await bcrypt.compare(req.body.password,user.password)
        if(!pass) return next(error(400,"PASSWORD NOT MATCHED"))

        const token = jwt.sign({id: user._id}, process.env.JWT)
        const {password,...NotPassword} = user._doc

        res.cookie("access_token",token,{
            httpOnly: true
        }).status(200).json(NotPassword)

    } catch (error) {
        
    }
}