import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import SocioComercialGral from "./SocioComercialGral.js";
import Sedes from "./Sedes.js";

const SocioAlumno = sequelize.define(
  "SocioAlumno",
  {
    SOCIO_ALUMNO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SOCIO_ID: {
      type: DataTypes.INTEGER,
    },
    SEDE_ID: {
      type: DataTypes.INTEGER,
    },
    TIPO_ADMISION: {
      type: DataTypes.STRING(250),
    },
    CLASIFICACION_SISFOH: {
      type: DataTypes.STRING(250),
    },
    FECHA_INGRESO: {
      type: DataTypes.DATE,
    },
    FECHA_EGRESO: {
      type: DataTypes.DATE,
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

SocioAlumno.belongsTo(SocioComercialGral, { foreignKey: "SOCIO_ID" });
SocioAlumno.belongsTo(Sedes, { foreignKey: "SEDE_ID" });

export default SocioAlumno;
