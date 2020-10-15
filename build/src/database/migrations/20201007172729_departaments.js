"use strict";
exports.up = function (knex) {
    return knex.schema.createTable('departaments', function (table) {
        table.increments('iddepartaments').primary();
        table.string('departaments_name').notNullable();
        table.string('departaments_image').notNullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('departaments');
};
