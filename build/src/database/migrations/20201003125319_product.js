"use strict";
exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments('idproduct').primary();
        table.string('product_name').notNullable();
        table.double('product_price').notNullable();
        table.integer('product_amount').notNullable();
        table.string('product_about');
        table.integer('user_iduser').unsigned();
        table.foreign('user_iduser').references('user.iduser');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product');
};
