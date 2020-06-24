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
    const { id } = req.params
    Helpers.findProductById(id).then(user => {res.status(200).json(user)})
    .catch(err => {
        res.status(500).json({message: `Error getting product`})
    })
})

router.post('/', (req, res) => {
    Helpers.addProducts(req.body).then(product => {
        res.status(200).json(product)
    }).catch(err=>{res.status(500).json({message: 'error adding product'})})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Helpers.removeProduct(id).then(product => {
        res.status(200).json(id)
    }).catch(err=>{res.status(500).json({message: 'error deleting product'})})
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    Helpers.editProduct(id).then(product => {
        res.status(200).json(product)
    }).catch(err=>{
        res.status(500).json({ message: 'error updating product'}, err)
    })
})


module.exports = router