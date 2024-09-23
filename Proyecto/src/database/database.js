import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("MATRICULA_DB_PRUEBA", "openpg", "openpgpwd", {
  host: "localhost",
  dialect: "postgres",
});
