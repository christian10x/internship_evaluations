import routerx from 'express-promise-router';
import cursos from './matricula/cursos.js';

const router = routerx();
router.use(cursos);

export default router;