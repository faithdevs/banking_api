const db = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "banking_api",
  },
});

module.exports = db;
