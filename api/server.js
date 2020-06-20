const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const userRouter = require('../routes/user-router.js')
const locationRouter = require('../routes/location-router.js')
const productRouter = require('../routes/product-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.json({message: "up"})
})

server.use('/api/', userRouter)
server.use('/api/locations/', locationRouter)
server.use('/api/products/', productRouter)

module.exports = server