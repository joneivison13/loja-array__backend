
exports.up = function(knex) {
  return knex.schema.createTable('products_photos',function(table){
    table.increments('idphoto').primary();
    table.string('products_photos_dir').notNullable();
    table.integer('products_idproduct').unsigned();
    table.foreign('products_idproduct').references('product.idproduct');
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products_photos');
};
