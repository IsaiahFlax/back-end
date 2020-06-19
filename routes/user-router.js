const express = require('express')
const Helpers = require('../models/dbHelpers.js')
const bcrypt = require('bcryptjs')
const generateToken = require('../auth/gerneratetoken')
const router = express.Router()

router.post('/register', (req, res) => {
    const credentials = req.body
    const { password } = credentials
    const hash = bcrypt.hashSync(credentials.password, 12)
    credentials.password = hash
    Helpers.addUser(credentials)
    .then(user => {
        res.status(200).json(user)
    }).catch(err => {
        if (error.errno = 19) {
            res.status(400).json({ message: "username already taken"})
        } else {
        res.status(500).json({message: `Error adding user`})
    }}
    )
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if(!(username && password)) {
        return res.status(400).json({ message: 'username and password required'})
    }

    Helpers.findUser(username)
    .then(user=>{
        if (user && bcrypt.compareSync(password, user.password)) {
            
            const token = generateToken(user)

            res.status(200).json({ message: `Welcome ${user.username}`, token})
        } else {
            res.status(401).json('Invalid Credentials')
        }
    }).catch()
})

router.get('/users', (req, res) => {
    Helpers.getAllUsers().then(user => {res.status(200).json(user)})
    .catch(err => {
        res.status(500).json({message: `Error getting users`})
    })
})

router.get('/products', (req, res) => {
    Helpers.getProducts.then(products => {res.status(200).json(products)})
    .catch(err => {
        res.status(500).json({message: `Error getting products`})
    })
})

module.exports = router