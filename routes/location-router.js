const express = require('express')
const Helpers = require('../models/dbHelpers.js')
const router = express.Router()

router.post('/', (req, res) => {
    Helpers.addLocation(req.body).then(location => {
        res.status(200).json(location)
    }).catch(err=> {
        res.status(500).json({message: `Error adding location`})
    })
})

router.get('/', (req, res) => {
    Helpers.getLocations().then(locations => {
        res.status(200).json(locations)
    }).catch()
})

module.exports = router