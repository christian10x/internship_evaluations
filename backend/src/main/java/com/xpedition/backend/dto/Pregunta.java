package com.xpedition.backend.dto;
import lombok.Data;

@Data
public class Pregunta {
    private String pregunta;
    private String respuesta;
    private Integer peso;
}
