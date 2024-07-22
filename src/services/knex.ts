import { Knex, knex } from "knex";
import knexConfig from "../config/knex";

let conn: Knex | undefined;

function conectar(): Knex {
  if (conn) return conn;

  conn = knex(knexConfig);
  return conn;
}

export default conectar();