import routerx from 'express-promise-router';
import cursos from './matricula/cursos.js';
import socioComercialGral from './matricula/socioComercialGral.js';
import matricula from './matricula/matricula.js';

const router = routerx();
router.use('/cursos',cursos);
router.use('/socioComercialGral',socioComercialGral);
router.use('/matricula',matricula);


export default router;