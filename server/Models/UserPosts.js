import mongoose from "mongoose";

const UserPostsSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    Tags: {
        type: [String]
    },
    Body: {
        type: String,
    },
    LocationId:{
        type: String
    }
})

export default mongoose.model("userpost",UserPostsSchema)