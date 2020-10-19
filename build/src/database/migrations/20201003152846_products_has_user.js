"use strict";
exports.up = function (knex) {
    return knex.schema.createTable('products_has_user', function (table) {
        table.increments('products_has_user_id');
        table.integer('products_idproducts').unsigned();
        table.integer('user_iduser').unsigned();
        table.foreign('products_idproducts').references('product.idproduct');
        table.foreign('user_iduser').references('user.iduser');
        table.timestamp('products_has_user_date');
        table.integer('products_has_user_qtd');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products_has_user');
};
