

const express = require('express')
const router = express.Router()

const Mascota = require('../models/mascotas');

router.get('/',async(req,res)=>{

    try {
        const arrayMascotasDB = await Mascota.find()
            res.render("mascotas",{
            arrayMascotas: arrayMascotasDB
        })
        console.log(arrayMascotasDB)
    } catch (error) {
        console.log(error)
    }


})

module.exports = router;