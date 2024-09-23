import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import SocioAlumno from "./SocioAlumno.js";
import Periodos from "./Periodos.js";

const MatriculaGral = sequelize.define(
  "MatriculaGrals",
  {
    MATRICULA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MATRICULA_NOMBRE: {
      type: DataTypes.STRING(250),
    },
    MATRICULA_DESC: {
      type: DataTypes.STRING(500),
    },
    SOCIO_ALUMNO_ID: {
      type: DataTypes.INTEGER,
    },
    PERIODO_ID: {
      type: DataTypes.INTEGER,
    },
    MONTO_BRUTO: {
      type: DataTypes.DECIMAL(18, 6),
    },
    MONTO_DSCTO: {
      type: DataTypes.DECIMAL(18, 6),
    },
    MONTO_NETO: {
      type: DataTypes.DECIMAL(18, 6),
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

MatriculaGral.belongsTo(SocioAlumno, { foreignKey: "SOCIO_ALUMNO_ID" });
MatriculaGral.belongsTo(Periodos, { foreignKey: "PERIODO_ID" });

export default MatriculaGral;
