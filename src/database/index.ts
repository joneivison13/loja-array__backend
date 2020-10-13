require('dotenv').config()

import knex from 'knex'
const knexfile =  {
  client: "mysql2",
  connection: {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    host: process.env.DATABASE_HOST,
  },
  migrations:{
    directory:`${__dirname}/src/database/migrations`
  },
  seeds:{
    directory:`${__dirname}/src/database/seeds`
  }
}

export default knex(knexfile)