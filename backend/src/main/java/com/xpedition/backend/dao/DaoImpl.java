package com.xpedition.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.xpedition.backend.dto.Respuesta;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

@Repository
public class DaoImpl implements Dao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private Connection conexion;

    @SuppressWarnings("null")
    private void crearConexion() {
        try {
            conexion = jdbcTemplate.getDataSource().getConnection();
            conexion.setAutoCommit(false);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    private void cerrarConexion() {
        try {
            if (conexion != null) {
                conexion.commit();
                conexion.close();
                conexion = null;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    public void insertarRespuestas(List<Map<String, Object>> respuestasJson) {
        String sql = "INSERT INTO Respuesta (alumno, evaluacion, pregunta, respuesta, calificacion) VALUES (?, ?, ?, ?, ?)";

        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);

            // Iteramos sobre el listado de respuestas
            for (Map<String, Object> entrada : respuestasJson) {
                Integer alumno = (Integer) entrada.get("alumno");   // Extraemos el alumno
                Integer evaluacion = (Integer) entrada.get("evaluación");   // Extraemos la evaluación

                // Aseguramos que la clave "respuestas" contenga una lista de mapas
                Object respuestasObj = entrada.get("respuestas");
                if (respuestasObj instanceof List<?>) {
                    List<?> respuestasList = (List<?>) respuestasObj;

                    // Iteramos sobre las respuestas (que son listas de mapas con pares pregunta-respuesta)
                    for (Object respuestaObj : respuestasList) {
                        if (respuestaObj instanceof Map<?, ?>) {
                            Map<?, ?> mapaRespuestas = (Map<?, ?>) respuestaObj;

                            for (Map.Entry<?, ?> entry : mapaRespuestas.entrySet()) {
                                if (entry.getKey() instanceof String && entry.getValue() instanceof String) {
                                    String pregunta = (String) entry.getKey();  // Pregunta
                                    String respuesta = (String) entry.getValue();  // Respuesta

                                    // Insertamos la respuesta en la base de datos
                                    insertarRespuesta(sentencia, alumno, evaluacion, pregunta, respuesta);
                                }
                            }
                        }
                    }
                }
            }

            // Ejecutamos el batch de inserciones
            sentencia.executeBatch();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    private void insertarRespuesta(PreparedStatement sentencia, Integer alumno, Integer evaluacion, String pregunta, String respuesta) throws SQLException {
        if (respuesta != null && !respuesta.isEmpty()) {
            sentencia.setInt(1, alumno);    // Asignamos el alumno
            sentencia.setInt(2, evaluacion);  // Asignamos la evaluación
            sentencia.setString(3, pregunta);  // Asignamos la pregunta
            sentencia.setString(4, respuesta);  // Asignamos la respuesta
            sentencia.setInt(5, 0);  // Calificación predeterminada a 0

            // Añadimos al batch
            sentencia.addBatch();
        }
    }
    @Override
    public Respuesta obtenerRespuesta(int alumno, int evaluacion, String pregunta) throws SQLException {
        String sql = "SELECT alumno, evaluacion, pregunta, respuesta, calificacion FROM Respuesta WHERE alumno = ? AND evaluacion = ? AND pregunta = ?";
        Respuesta respuesta = null;

        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, alumno);
            sentencia.setInt(2, evaluacion);
            sentencia.setString(3, pregunta);

            ResultSet rs = sentencia.executeQuery();
            if (rs.next()) {
                respuesta = new Respuesta();
                respuesta.setAlumno(rs.getInt("alumno"));
                respuesta.setEvaluacion(rs.getInt("evaluacion"));
                respuesta.setPregunta(rs.getString("pregunta"));
                respuesta.setRespuesta(rs.getString("respuesta"));
                respuesta.setCalificacion(rs.getInt("calificacion"));
            }

            rs.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return respuesta;
    }
    // Método para validar si el evaluador está asignado y validado para la evaluación
    @Override
    public boolean esEvaluadorValidado(int evaluador, int evaluacion) throws SQLException {
        String sql = "SELECT COUNT(*) FROM Evaluador_Evaluacion WHERE evaluador = ? AND evaluacion = ? AND validacion = 1";
        boolean validado = false;

        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, evaluador);
            sentencia.setInt(2, evaluacion);

            ResultSet rs = sentencia.executeQuery();
            if (rs.next()) {
                validado = rs.getInt(1) > 0;  // Si el conteo es mayor a 0, el evaluador está validado
            }

            rs.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return validado;
    }

    // Método para calificar una respuesta
    @Override
    public void calificarRespuesta(int alumno, int evaluacion, String pregunta, int calificacion) throws SQLException {
        String sql = "UPDATE Respuesta SET calificacion = ? WHERE alumno = ? AND evaluacion = ? AND pregunta = ?";

        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, calificacion);
            sentencia.setInt(2, alumno);
            sentencia.setInt(3, evaluacion);
            sentencia.setString(4, pregunta);

            sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    @Override
    public void actualizarPesoPregunta(int evaluacion, String pregunta, int peso) throws SQLException {
        String sql = "UPDATE Pregunta SET peso = ? WHERE pregunta = (SELECT pregunta FROM Evaluacion_Pregunta WHERE evaluacion = ? AND pregunta = ?)";
        
        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, peso);
            sentencia.setInt(2, evaluacion);
            sentencia.setString(3, pregunta);
            sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    public void actualizarNotaAprobatoria(int evaluacion, int notaAprobatoria) throws SQLException {
        String sql = "UPDATE Evaluacion SET nota_aprobatoria = ? WHERE evaluacion = ?";
        
        try {
            crearConexion();
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, notaAprobatoria);
            sentencia.setInt(2, evaluacion);
            sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    // Método para obtener las respuestas del alumno
    @Override
    public List<Respuesta> obtenerRespuestasAlumno(int alumno, int evaluacion) throws SQLException {
        String sql = "SELECT r.pregunta, r.respuesta, r.calificacion " +
                    "FROM Respuesta r " +
                    "WHERE r.alumno = ? AND r.evaluacion = ?";
        List<Respuesta> respuestas = new ArrayList<>();

        try (@SuppressWarnings("null")
        Connection conexion = jdbcTemplate.getDataSource().getConnection();
            PreparedStatement stmt = conexion.prepareStatement(sql)) {

            stmt.setInt(1, alumno);
            stmt.setInt(2, evaluacion);
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Respuesta respuesta = new Respuesta();
                    // Asignamos los valores de alumno y evaluacion
                    respuesta.setAlumno(alumno);
                    respuesta.setEvaluacion(evaluacion);
                    respuesta.setPregunta(rs.getString("pregunta"));
                    respuesta.setRespuesta(rs.getString("respuesta"));
                    respuesta.setCalificacion(rs.getInt("calificacion"));
                    respuestas.add(respuesta);
                }
            }
        } catch (SQLException e) {
            throw new SQLException("Error al obtener respuestas del alumno", e);
        }
        return respuestas;
    }

    // Método para obtener la nota del alumno
    @Override
    public int obtenerNotaAlumno(int alumno, int evaluacion) throws SQLException {
        String sql = "SELECT ea.nota FROM Evaluacion_Alumno ea WHERE ea.alumno = ? AND ea.evaluacion = ?";
        try (@SuppressWarnings("null")
        Connection conexion = jdbcTemplate.getDataSource().getConnection();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {
    
            stmt.setInt(1, alumno);
            stmt.setInt(2, evaluacion);
    
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("nota");
                }
            }
        } catch (SQLException e) {
            throw new SQLException("Error al obtener la nota del alumno", e);
        }
        return 0;  // Si no se encuentra la nota
    }    

    // Método para obtener la nota aprobatoria de la evaluación
    @Override
    public int obtenerNotaAprobatoria(int evaluacion) throws SQLException {
        String sql = "SELECT e.nota_aprobatoria FROM Evaluacion e WHERE e.evaluacion = ?";
        try (@SuppressWarnings("null")
        Connection conexion = jdbcTemplate.getDataSource().getConnection();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {
    
            stmt.setInt(1, evaluacion);
    
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("nota_aprobatoria");
                }
            }
        } catch (SQLException e) {
            throw new SQLException("Error al obtener la nota aprobatoria", e);
        }
        return 0;
    }    
}
