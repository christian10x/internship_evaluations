package com.trainee.backend.application.controller;

import com.trainee.backend.domain.request.AlumnoRequest;
import com.trainee.backend.domain.service.AlumnoService;
import com.trainee.backend.infraestructure.entity.Alumno;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/alumnos")
public class AlumnoController {
    private final AlumnoService alumnoService;

    @PostMapping("/crear")
    public ResponseEntity<?> registrarAlumno(@Valid @RequestBody AlumnoRequest alumno){
        if (alumnoService.registrarAlumno(alumno).isEmpty()){
            Map<String, String> response = new HashMap<>();
            response.put("codigo", "El codigo " + alumno.getCodigo() + " ya está en uso");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        alumnoService.registrarAlumno(alumno);
        return ResponseEntity.ok("Alumno registrado con exito");
    }

    @GetMapping("/all")
    public ResponseEntity<?> listarAlumnos(){
        return ResponseEntity.ok().body(alumnoService.listarAlumnos());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }


}
