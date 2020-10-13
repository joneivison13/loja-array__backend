
exports.up = function(knex) {
  return knex.schema.createTable('departaments_has_products', table => {
    table.integer('departaments_iddepartament').unsigned();
    table.integer('products_idproducts').unsigned();
    table.foreign('departaments_iddepartament').references('departaments.iddepartaments');
    table.foreign('products_idproducts').references('product.idproduct')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('departaments_has_products');
};
