const ClientSql = require("./sql.js");
const options = require("./src/DB_options/db");

const sql = new ClientSql(options);

async function createTableSqlite3() {
  await sql.createTable();
}

createTableSqlite3();
