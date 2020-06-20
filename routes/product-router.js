const express = require('express')
const Helpers = require('../models/dbHelpers.js')
const router = express.Router()


router.get('/', (req, res) => {
    Helpers.getProducts().then(products => {res.status(200).json(products)})
    .catch(err => {
        res.status(500).json({message: `Error getting products`})
    })
})

router.get('/:id', (req, res) => {
    const {id } = req.params
    Helpers.findProductById(id).then(user => {res.status(200).json(user)})
    .catch(err => {
        res.status(500).json({message: `Error getting product`})
    })
})


module.exports = router