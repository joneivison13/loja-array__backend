
exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('iduser').primary();
    table.string('user_name').notNullable();
    table.string('user_lastname').notNullable();
    table.string('user_email').notNullable().unique();
    table.string('user_pass').notNullable();
    table.string('user_whatsapp').notNullable();
    table.string('user_photo').notNullable();
    table.string('user_city').notNullable();
    table.string('user_state').notNullable();
    table.string('user_district').notNullable();
    table.string('user_postalcode').notNullable();
    table.string('user_cpf').notNullable()


    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user');
};
