const express = require('express')
const Helpers = require('../models/dbHelpers.js')
const router = express.Router()

router.post('/', (req, res) => {
    const location = req.body
    Helpers.addLocation(location).then(location => {
        res.status(200).json(location)
    }).catch(err=> {
        res.status(500).json({message: `Error adding location`})
    })
})

router.get('/', (req, res) => {
    Helpers.getLocations().then(locations => {
        res.status(200).json(locations)
    }).catch(err=>{
        res.status(500).json({message: 'error getting locations'})
    })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    Helpers.getPro().then(locations => {
        res.status(200).json(locations)
    }).catch()
})

module.exports = router