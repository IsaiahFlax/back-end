const express = require('express')
const Helpers = require('../models/dbHelpers.js')
const bcrypt = require('bcryptjs')

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

    Helpers.find(username)
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
    Helpers.getAll().then(user => res.status(200).json(user))
    .catch(err => {
        res.status(500).json({message: `Error getting users`})
    }
    )
})

module.exports = router