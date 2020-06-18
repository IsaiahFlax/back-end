const jwt = require('jsonwebtoken')

module.exports = user => {
    //need 3 things to create a token: payload, secret, and options

    const payload = {
        id: user.id,
        username: user.username
    }

    const secret = process.env.SECRET

    const options = {
        expiresIn: '2h'
    }

    return jwt.sign(payload, secret, options)
}