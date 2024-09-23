import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

const Horarios = sequelize.define(
  "Horarios",
  {
    HORARIO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    DIA: {
      type: DataTypes.STRING(18),
    },
    HORA_INICIO: {
      type: DataTypes.STRING(18),
    },
    HORA_FIN: {
      type: DataTypes.STRING(18),
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

export default Horarios;
