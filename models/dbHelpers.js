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
    addProducts,
    findProductsById,
    addLocation,
    findProductsByUser,
    getLocations,
    findProductsByLocation,
    addCategory,
    getCategory,
    removeProduct
}

function removeProduct(id) {
    return db('products').where({ 'id': id}).del()
}

function getLocations() {
    return db('locations');
 }

 function getCategory() {
     return db('categories')
 }

function findUser(username) {
    return db('users').where({ username }).first()
}

async function addUser(user) {
    await db('users').insert(user, ['id'])
    return getAllUsers()

    // const [id] = await db('users').insert(user)
    // return findById(id)
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

async function getAllUsers() {
    return await db('users').select('users.username', 'users.firstname', 'users.lastname', 'users.email', 'users.id');
 }

function getProducts() {
    return db('products')
 }
 async function addCategory(category) {
    return await db('categories').insert(category, ['id'])
    // const [id] = await db('users').insert(user)
    // return findById(id)
}
async function addLocation(location) {
    return await db('locations').insert(location, ['id'])
    // const [id] = await db('users').insert(user)
    // return findById(id)
}

 async function addProducts(products) {
    return await db('products').insert(products, ['id'])
    // const [id] = await db('users').insert(user)
    // return findById(id)
}

function findProductsById(id) {
    return db('products').where({ id }).first()
}

function findProductsByLocation(id) {
    return db('products').join('locations', 'products.location_id', 'locations.id')
    .select('locations.id', 'products.name').where({location_id: id})
}

function findProductsByUser(id) {
    return db('products').join('users', 'products.user_id', 'users.id')
    .select('users.id', 'users.username', 'products.id', 'products.product_name', 'products.price')
    .where({user_id: id})
}