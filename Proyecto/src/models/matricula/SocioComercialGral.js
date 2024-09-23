import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

const SocioComercialGral = sequelize.define(
  "SocioComercialGral",
  {
    SOCIO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    SOCIO_NOMBRES: {
      type: DataTypes.STRING(250),
    },
    SOCIO_APELLIDO_PATERNO: {
      type: DataTypes.STRING(250),
    },
    SOCIO_APELLIDO_MATERNO: {
      type: DataTypes.STRING(250),
    },
    NUMERO_DOCUMENTO: {
      type: DataTypes.STRING(50),
    },
    SOCIO_ALUMNO: {
      type: DataTypes.CHAR(1),
    },
    SOCIO_DOCENTE: {
      type: DataTypes.CHAR(1),
    },
    NUMERO_TELEFONO: {
      type: DataTypes.STRING(50),
    },
    EMAIL: {
      type: DataTypes.STRING(100),
    },
    CONTRASEÑA: {
      type: DataTypes.STRING(100),
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

export default SocioComercialGral;
