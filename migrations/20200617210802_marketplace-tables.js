
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', locations => {
    locations.increments()
    locations.string('location', 255).notNullable().unique()
  })
  .createTable('users', users => {
      users.increments()
      users.string('username', 255).notNullable().unique()
      users.string('password', 255).notNullable()
      users.string('firstname').notNullable()
      users.string('lastname').notNullable()
      users.varchar('email').unique()
  }).createTable('categories', categories => {
      categories.increments()
      categories.string('category_name', 255).notNullable
  }).createTable('products', products => {
      products.increments()
      products.string('product_name', 255)
      products.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      products.integer('category_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      products.decimal('price')
      products.integer('location_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('locations')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('categories')
    .dropTableIfExists('users')
    .dropTableIfExists('locations')
};
