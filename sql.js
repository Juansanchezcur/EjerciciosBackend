const knex = require("knex");

class ClientSql {
  constructor(config) {
    this.knex = knex(config);
  }

  async createTable() {
    await this.knex.schema.dropTableIfExists("ecommerce");
    await this.knex.schema.createTable("ecommerce", (table) => {
      table.string("user", 50).notNullable();
      table.string("message", 100).notNullable();
      table.string("timestamp", 50).notNullable();
    });
  }

  async getAllMessages() {
    return await this.knex.select("*").from("ecommerce");
  }

  async insertMessage(message) {
    await this.knex("ecommerce").insert(message);
  }

  async deleteMessage(id) {
    await this.knex.from("ecommerce").where("id", id).del();
  }

  async close() {
    await this.knex.destroy();
  }
}

module.exports = ClientSql;
