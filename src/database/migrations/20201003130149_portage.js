
exports.up = function(knex) {
  return knex.schema.createTable('portage',function(table){
    table.increments('idportage').primary();
    table.string('portage_date').notNullable();
    table.string('portage_price').notNullable().unique();
    table.string('portage_days').notNullable().unique();
    table.string('portage_type').notNullable().unique();


    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('portage');
};
