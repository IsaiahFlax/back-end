// const knex = require('knex')
// const config = require('../knexfile.js')
// const db = knex(config.development)

const db = require('../dbConfig')

module.exports = {
    addUser,
    findById,
    getAllUsers,
    findUser,
    getProducts,
    addProducts
}

function findUser(username) {
    return db('users').where({ username }).first()
}

async function addUser(user) {
    return await db('users').insert(user, ['id'])
    // const [id] = await db('users').insert(user)
    // return findById(id)
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

function getAllUsers() {
    return db('users');
  }