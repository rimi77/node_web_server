/* require("dotenv").config();
const { get } = require("env-var");

const envs = {
  PORT: get("PORT").required().asPortNumber(),
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
};

module.exports = {
  envs,
};
 */

/* para trabajar con modulos */
/* Migrar Web Server a ES6 */
import env from "dotenv";
import envvar from "env-var";

env.config();

export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};
