import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import SocioComercialGral from "./SocioComercialGral.js";
import Sedes from "./Sedes.js";

const SocioDocente = sequelize.define(
  "SocioDocente",
  {
    SOCIO_DOCENTE_ID: {
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
    NOMBRE_PROFESION: {
      type: DataTypes.STRING(250),
    },
    SUELDO: {
      type: DataTypes.DECIMAL(18, 6),
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

SocioDocente.belongsTo(SocioComercialGral, { foreignKey: "SOCIO_ID" });
SocioDocente.belongsTo(Sedes, { foreignKey: "SEDE_ID" });

export default SocioDocente;
