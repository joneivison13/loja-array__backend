"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var knex_1 = __importDefault(require("knex"));
var knexfile = {
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
};
exports.default = knex_1.default(knexfile);
