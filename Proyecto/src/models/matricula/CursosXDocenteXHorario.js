import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import CursosXDocente from "./CursosXDocente.js";
import Horarios from "./Horarios.js";

const CursosXDocenteXHorario = sequelize.define(
  "CursosXDocenteXHorario",
  {
    CURSO_X_DOCENTE_X_HORARIO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CURSO_X_DOCENTE_ID: {
      type: DataTypes.INTEGER,
    },
    HORARIO_ID: {
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

CursosXDocenteXHorario.belongsTo(CursosXDocente, { foreignKey: "CURSO_X_DOCENTE_ID" });
CursosXDocenteXHorario.belongsTo(Horarios, { foreignKey: "HORARIO_ID" });

export default CursosXDocenteXHorario;
