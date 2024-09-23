import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

const Sedes = sequelize.define(
  "Sedes",
  {
    SEDE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    SEDE_NOMBRE: {
      type: DataTypes.STRING(250),
    },
    DIRECCION: {
      type: DataTypes.STRING(250),
    },
    LATITUD: {
      type: DataTypes.STRING(250),
    },
    LONGITUD: {
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

export default Sedes;
