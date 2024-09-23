import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import MatriculaGral from "./MatriculaGral.js";
import CursosXDocenteXHorario from "./CursosXDocenteXHorario.js";

const MatriculaDetalle = sequelize.define(
  "MatriculaDetalles",
  {
    MATRICULA_DETALLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    MATRICULA_ID: {
      type: DataTypes.INTEGER,
    },
    CURSO_X_DOCENTE_X_HORARIO_ID: {
      type: DataTypes.INTEGER,
    },
    MONTO_BRUTO_DETALLE: {
      type: DataTypes.DECIMAL(18, 6),
    },
    MONTO_DSCTO_DETALLE: {
      type: DataTypes.DECIMAL(18, 6),
    },
    MONTO_NETO_DETALLE: {
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

MatriculaDetalle.belongsTo(MatriculaGral, { foreignKey: "MATRICULA_ID" });
MatriculaDetalle.belongsTo(CursosXDocenteXHorario, { foreignKey: "CURSO_X_DOCENTE_X_HORARIO_ID" });

export default MatriculaDetalle;
