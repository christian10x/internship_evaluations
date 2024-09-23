import routerx from 'express-promise-router';
import socioComercialGralController from '../../controllers/matricula/socioComercialGralController.js';

const router = routerx();

router.post('/crearSocioComercialGral', socioComercialGralController.crearSocioComercialGral);
router.post('/login', socioComercialGralController.login);

export default router;