export default {
    listarCursos: async (req, res) => {
        res.json({
            message: 'Listar cursos'
        });
    },
    crearCurso: async (req, res) => {
        res.json({
            message: 'Crear curso'
        });
    },
    actualizarCurso: async (req, res) => {
        res.json({
            message: 'Actualizar curso'
        });
    },
    eliminarCurso: async (req, res) => {
        res.json({
            message: 'Eliminar curso'
        });
    }
};