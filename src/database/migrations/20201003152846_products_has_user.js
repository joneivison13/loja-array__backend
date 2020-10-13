
exports.up = function(knex) {
  return knex.schema.createTable('products_has_user',function(table){
    table.integer('products_idproducts').unsigned();
    table.integer('user_iduser').unsigned();
    table.foreign('products_idproducts').references('product.idproduct');
    table.foreign('user_iduser').references('user.iduser');
    table.timestamp('products_has_user_date');
    table.integer('products_has_user_qtd');
    table.integer('portage_idportage').unsigned();
    table.foreign('portage_idportage').references('portage.idportage');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products_has_user');
};
