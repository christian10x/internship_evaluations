import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import TiposCurso from "./TiposCurso.js";

const Cursos = sequelize.define(
  "Cursos",
  {
    CURSO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    CURSO_NOMBRE: {
      type: DataTypes.STRING(250),
    },
    CURSO_DESC: {
      type: DataTypes.STRING(500),
    },
    TIPO_CURSO_ID: {
      type: DataTypes.INTEGER,
    },
    CAPACIDAD_ALUMNOS: {
      type: DataTypes.INTEGER,
    },
    CREDITOS: {
      type: DataTypes.INTEGER,
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

Cursos.belongsTo(TiposCurso, { foreignKey: "TIPO_CURSO_ID" });

export default Cursos;
