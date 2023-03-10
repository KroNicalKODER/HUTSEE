import jwt from 'jsonwebtoken'
import err from './error.js'

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token) return next(err("401","UNAUTHETICATED USER"))

    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err) return next(err(403,"INVALID USER"))
        req.user = user;
        next()
    })
}

export default verifyToken