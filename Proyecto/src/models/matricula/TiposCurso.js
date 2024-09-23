import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

const TiposCurso = sequelize.define(
  "TiposCursos",
  {
    TIPO_CURSO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    TIPO_CURSO_NOMBRE: {
      type: DataTypes.STRING(250),
    },
    TIPO_CURSO_DESC: {
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

export default TiposCurso;
