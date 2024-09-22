package com.xpedition.backend.dto;
import lombok.Data;

@Data

public class Respuesta {
    private Integer alumno;
    private Integer evaluacion;
    private String pregunta;
    private String respuesta;
    private Integer calificacion;
    public void setAlumno(Integer alumno) {
        this.alumno = alumno;
    }

    public void setEvaluacion(Integer evaluacion) {
        this.evaluacion = evaluacion;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }

    public void setCalificacion(Integer calificacion) {
        this.calificacion = calificacion;
    }
}
