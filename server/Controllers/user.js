import User from '../Models/User.js'
import err from '../error.js'

export const Update = async (req,res,next) => {
    if (req.params.id === req.user.id) {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set : req.body
            },{
                new: true,
            })
            res.status(200).json(updateUser)
        } catch (error) {
            next(err(error))
        }
        
    } else {
        return next(err(403,"USER TRIED TO UPDATE ANOTHER ACCOUNT"))
    }
}

export const del = async (req,res,next) => {
    if(req.params.id === req.user.id) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id,{})
            res.status(200).json(deleteUser)

        } catch (error) {
            next(err(error))
        }
    } else {
        return next(err(403,"USER TRIED TO DELETE OTHER USER"))
    }
}

export const get = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}