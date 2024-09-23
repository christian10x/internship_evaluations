import routerx from 'express-promise-router';
import cursoController from '../../controllers/matricula/cursosController.js';

const router = routerx();

router.post('/listarCursos', cursoController.listarCursos);
router.get('/crearCurso', cursoController.crearCurso);
router.get('/actualizarCurso', cursoController.actualizarCurso);
router.get('/eliminarCurso', cursoController.eliminarCurso);

export default router;