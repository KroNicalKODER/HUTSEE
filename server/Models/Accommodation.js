import mongoose from 'mongoose'

const AccommodationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    amneties: {
        type: [String]
    },
    nearby: {
        type: [String]
    },
    phone:{
        type: String,
        required: true
    },
    sharing1:{
        type: Number,
        required: true,
    },
    sharing2:{
        type: Number
    },
    sharing3:{
        type: Number
    },
    roomSize:{
        type: String
    },
    imageUrls:{
        type: [String]
    }
})

export default mongoose.model("accommodation",AccommodationSchema)