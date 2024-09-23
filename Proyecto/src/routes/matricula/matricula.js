import routerx from 'express-promise-router';
import matriculaController from '../../controllers/matricula/matriculaController.js';

const router = routerx();

router.post('/registrarMatricula', matriculaController.registrarMatricula);
router.get('/obtenerHorarioPorCursoYAlumno', matriculaController.obtenerHorarioPorCursoYAlumno);
router.get('/obtenerCursosConHorarios', matriculaController.obtenerCursosConHorarios);

export default router;  