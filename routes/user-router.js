const express = require('express')
const Helpers = require('../models/dbHelpers.js')

const router = express.Router()

router.post('/register', (req, res) => {
    Helpers.addUser(req.body)
    .then(user => {
        res.status(200).json(user)
    }).catch(err => {
        res.status(500).json({message: `Error adding user`})
    }
    )
})

router.get('/users', (req, res) => {
    Helpers.getAll().then(user => res.status(200).json(user))
    .catch(err => {
        res.status(500).json({message: `Error getting users`})
    }
    )
})

module.exports = router