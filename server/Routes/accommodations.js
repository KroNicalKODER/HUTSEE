import express from 'express'
import { createAccommodation } from '../Controllers/accommodation.js'
import verifyToken from '../verifyToken.js'


const router = express.Router()

router.post("/",verifyToken,createAccommodation)

router.get('/find/:id')

//Random but near
router.get('/rand')

//BETWEEN rent
router.get('/bet')



export default router