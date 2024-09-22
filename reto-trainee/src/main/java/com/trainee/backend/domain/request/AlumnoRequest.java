package com.trainee.backend.domain.request;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
public class AlumnoRequest {
    @NotBlank(message = "El campo codigo es obligatorio")
    @NotNull(message = "El campo codigo es obligatorio")
    @Size(min = 6, max=6, message = "El codigo debe ser de 6 digitos")
    private String codigo;
    @NotBlank(message = "El campo nombre es obligatorio")
    @NotNull(message = "El campo nombre es obligatorio")
    private String nombres;
    @NotBlank(message = "El campo apellido es obligatorio")
    @NotNull(message = "El campo apellido es obligatorio")
    private String apellidos;
}
