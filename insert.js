const ClientSql = require("./sql.js");
const options = require("./src/DB_options/db");

const sql = new ClientSql(options);

async function insertMessageInTable(message) {
  await sql.insertMessage(message);
}

module.exports = { insertMessageInTable };
