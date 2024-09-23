import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import Cursos from "./Cursos.js";
import SocioDocente from "./SocioDocente.js";

const CursosXDocente = sequelize.define(
  "CursosXDocente",
  {
    CURSO_X_DOCENTE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SOCIO_DOCENTE_ID: {
      type: DataTypes.INTEGER,
    },
    CURSO_ID: {
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

CursosXDocente.belongsTo(Cursos, { foreignKey: "CURSO_ID" });
CursosXDocente.belongsTo(SocioDocente, { foreignKey: "SOCIO_DOCENTE_ID" });

export default CursosXDocente;
