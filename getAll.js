const ClientSql = require("./sql.js");
const options = require("./src/DB_options/db");

const sql = new ClientSql(options);

async function getAllMsgs() {
  const messages = await sql.getAllMessages();
  return messages;
}

module.exports = { getAllMsgs };
