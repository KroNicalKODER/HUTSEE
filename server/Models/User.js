import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    Posts:{
        type: [String],                     //POST IDs
    },
    Chats:{
        type: [{
            userId: String,
            chatId: String
        }]                      //CHAT ROOM IDs
    }
},{
    timestamps: true
})

export default mongoose.model("user",UserSchema)