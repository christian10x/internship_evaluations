import bcrypt from "bcryptjs";
import SocioComercialGral from "../../models/matricula/SocioComercialGral.js    ";
import token from "../../services/token.js";

export default {
  login: async (req, res) => {
    try {
      const user = await SocioComercialGral.findOne({
        where: {
          EMAIL: req.body.EMAIL,
        },
      });

      if (user) {
        let compare = await bcrypt.compare(
          req.body.CONTRASEÑA,
          user.CONTRASEÑA
        );

        if (compare) {
          let tokenT = await token.encode(
            user.SOCIO_ID,
            user.SOCIO_ALUMNO,
            user.EMAIL
          );

          const userFrontend = {
            token: tokenT,
            user: {
              SOCIO_ID: user.SOCIO_ID,
              SOCIO_NOMBRES: user.SOCIO_NOMBRES,
              SOCIO_APELLIDO_PATERNO: user.SOCIO_APELLIDO_PATERNO,
              SOCIO_APELLIDO_MATERNO: user.SOCIO_APELLIDO_MATERNO,
              NUMERO_DOCUMENTO: user.NUMERO_DOCUMENTO,
              SOCIO_ALUMNO: user.SOCIO_ALUMNO,
              SOCIO_DOCENTE: user.SOCIO_DOCENTE,
              NUMERO_TELEFONO: user.NUMERO_TELEFONO,
              EMAIL: user.EMAIL,
            },
          };

          res.status(200).json({ userFrontend: userFrontend });
        }

        const match = await bcrypt.compare(
          req.body.CONTRASEÑA,
          user.CONTRASEÑA
        );

        if (match) {
          res.status(200).json({
            user,
            token: "token",
          });
        } else {
          res.status(404).send({
            message: "Contraseña incorrecta",
          });
        }
      } else {
        res.status(404).send({
          message: "Usuario no encontrado",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Error",
      });
      console.log(error);
    }
  },

  crearSocioComercialGral: async (req, res) => {
    try {
      req.body.CONTRASEÑA = await bcrypt.hash(req.body.CONTRASEÑA, 10);

      const user = await SocioComercialGral.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send({
        message: "Error",
      });
      console.log(error);
    }
  },
};
