"use strict";
// Update with your config settings.
require('dotenv').config();
module.exports = {
    development: {
        client: "mysql2",
        connection: {
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
            host: process.env.DATABASE_HOST,
        },
        migrations: {
            directory: __dirname + "/src/database/migrations"
        },
        seeds: {
            directory: __dirname + "/src/database/seeds"
        }
    }
};
