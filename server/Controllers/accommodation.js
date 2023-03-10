import Accommodation from "../Models/Accommodation.js"
import axios from "axios"
import mapboxSdk from "@mapbox/mapbox-sdk"
import GeocodingService from '@mapbox/mapbox-sdk/services/geocoding.js';


export const createAccommodation = async (req,res,next) => {
    if(req.body.latitude == "nn" && req.body.longitude == "nn"){
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ipAddress)
        const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        const lat = response.data.latitude
        console.log(lat)
        const lon = response.data.longitude
        console.log(lon)
        req.body.latitude = lat
        req.body.longitude = lon
    }
    console.log(req.body)
    const newAcc = new Accommodation({
        userId : req.user.id,
        ...req.body
    })
    try {
        const savedAcc = await newAcc.save()
        const urls = req.body.imageUrls
        for(let i = 0 ; i < urls.length ; i++){
            cloudinary.uploader.upload(urls[i], {public_id: "olympic_flag"})
        }
        res.then((data) => {
        console.log(data)
        console.log(data.secure_url)
        }).catch((err) => {
        console.log(err)
        })
        res.status(200).json(savedAcc)
    } catch (error) {
        next(error)
    }
}

