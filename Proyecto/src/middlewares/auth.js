import token from "../services/token.js";

export default {
  verifyUser: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No se envio token",
      });
    }

    const response = await token.decode(req.headers.token);

    if (response) {
      if (response.SOCIO_ALUMNO === "1") {
        next();
      } else {
        return res.status(403).send({
          message: "Acceso no autorizado",
        });
      }
    } else {
      res.status(403).send({
        message: "No autorizado",
      });
    }
  },
};
