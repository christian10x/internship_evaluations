import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

const Periodos = sequelize.define(
  "Periodos",
  {
    PERIODO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PERIODO_NOMBRE: {
      type: DataTypes.STRING(250),
    },
    PERIODO_DESC: {
      type: DataTypes.STRING(250),
    },
    LOG_FECHA_CREACION: {
      type: DataTypes.DATE,
    },
    LOG_USUARIO_CREACION: {
      type: DataTypes.STRING(50),
    },
    LOG_FECHA_ACTUALIZACION: {
      type: DataTypes.DATE,
    },
    LOG_USUARIO_ACTUALIZACION: {
      type: DataTypes.STRING(50),
    },
    LOG_FECHA_INACTIVACION: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);

export default Periodos;
