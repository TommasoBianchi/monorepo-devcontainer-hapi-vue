"use strict";

const tableName = "users";

exports.up = async (knex) => {
  await knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("name");
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(tableName);
};
